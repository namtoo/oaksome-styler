import React, {useEffect, useMemo, useState} from 'react'
// @ts-ignore
import optionsData from '../data/options_02.js'
import './Configurator.css'

// Pre-import all SVGs from assets/svg so Vite bundles them correctly.
// Keys look like "../assets/svg/FA_01.svg", values are the resolved URLs.
const svgAssets = import.meta.glob<string>('../assets/svg/*.svg', {eager: true, query: '?url', import: 'default'})

// ─── Types ────────────────────────────────────────────────────────────────────

interface OptionItem {
    value: string
    label: string
    data?: {
        collection?: string | string[]
        image?: string
        have_pull?: string
        [key: string]: unknown
    }
    Attributes?: {
        filter?: string[]
        front?: string[]
        COLLECTION?: string[]
        image?: string[]
        hexa_code?: string[]
        [key: string]: unknown
    }
}

interface OptionsData {
    COLLECTION_ITEMS: OptionItem[]
    FRONT_TYPE_ITEMS: OptionItem[]
    FINISH_EXT_ITEMS: OptionItem[]
    FINISH_INT_ITEMS: OptionItem[]
    PULL_ITEMS: OptionItem[]
}

const options: OptionsData = optionsData

function getHexColor(item: OptionItem): string | null {
    const code = item.Attributes?.hexa_code?.[0]
    return code ? code.toUpperCase() : null
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getFilteredFronts(collection: string): OptionItem[] {
    if (!collection) return options.FRONT_TYPE_ITEMS
    return options.FRONT_TYPE_ITEMS.filter(item => {
        const col = item.Attributes?.filter
        return Array.isArray(col) && col.includes(collection)
    })
}

/**
 * FINISH_EXT filter — resolves CONCAT($COLLECTION.value, $FRONT_TYPE.value).
 * Key format: "COLLECTION_01_FA_01_MEL"  (separator = "_", full front value)
 */
function getFilteredFinishExt(frontType: string, collection: string): OptionItem[] {
    if (!frontType || !collection) return options.FINISH_EXT_ITEMS
    const key = `${collection}${frontType}`
    return options.FINISH_EXT_ITEMS.filter(item =>
        (item.Attributes?.filter as string[] | undefined)?.includes(key)
    )
}

/**
 * FINISH_INT filter — resolves CONCAT($COLLECTION.value, $FRONT_TYPE.value, $FINISH_EXT.value).
 *
 * Key format: "COLLECTION_01FA_01WE_181"  (no separator)
 *   - collection  : COLLECTION value            e.g. "COLLECTION_01"
 *   - frontBase   : FRONT_TYPE data.description   e.g. "FA_01"  (not the full "FA_01_MEL")
 *   - finishExtKey: FINISH_EXT value parts reversed e.g. "181_WE" → "WE_181"
 *                                                       "CST_0U115" → "0U115_CST"
 */

function getFilteredFinishInt(collection: string, frontType: string, finishExt: string): OptionItem[] {
    if (!collection || !frontType || !finishExt) return options.FINISH_INT_ITEMS
    const frontItem = options.FRONT_TYPE_ITEMS.find(f => f.value === frontType)
    const frontBase = (frontItem?.Attributes?.description as string | undefined) ?? frontType
    const key = `${collection}${frontBase}${finishExt}`
    return options.FINISH_INT_ITEMS.filter(item =>
        (item.Attributes?.filter as string[] | undefined)?.includes(key)
    )
}

/**
 * PULL filter — key = FINISH_EXT item's filter key (matching collection+frontBase)
 *               concatenated with the FINISH_EXT value.
 * e.g. "COLLECTION_01FA_01_LAQ" + "BT_1230" → "COLLECTION_01FA_01_LAQBT_1230"
 *      "COLLECTION_01FA_01_MEL" + "00025_CST" → "COLLECTION_01FA_01_MEL00025_CST"
 */
function getFilteredPulls(collection: string, frontType: string, finishExt: string): OptionItem[] {
    if (!collection || !frontType || !finishExt) return options.FINISH_INT_ITEMS
    const frontItem = options.FRONT_TYPE_ITEMS.find(f => f.value === frontType)
    const frontBase = (frontItem?.Attributes?.description as string | undefined) ?? frontType
    const key = `${collection}${frontBase}${finishExt}`
    console.log('key> ', key)
    if (frontItem?.data?.have_pull === 'No') return []
    return options.PULL_ITEMS.filter(item =>
        (item.Attributes?.filter as string[] | undefined)?.includes(key)
    )
}

/** If current value is no longer in items, auto-select first item. */
function autofill(items: OptionItem[], current: string): string {
    if (!items.length) return ''
    if (items.some(i => i.value === current)) return current
    return items[0].value
}

const CDN_BASE = 'https://imagedelivery.net/aYYmWUcv7lRhpLdU4ojPsA'

// ─── Front image scale — adjust to zoom in/out the SVG inside the button ─────
const FRONT_IMG_FOCUS = {
    scale: 1,        // < 1 zooms out, > 1 zooms in
    x: '50%',
    y: '50%',
    objectFit: 'contain',  // show the whole SVG without cropping
}

// ─── Pull image focus — adjust these to frame the pull inside the PNG ─────────
const PULL_IMG_FOCUS = {
    scale: 4.5,       // zoom factor  (1 = no zoom)
    x: '70%',         // horizontal center of interest
    y: '30%',         // vertical center of interest (lower % = higher in image)
}

function getItemImage(item: OptionItem): string | null {
    // COLLECTION items use local images via data.image
    if (item.data?.image) return `/images/${item.data.image}`

    const filename = item.Attributes?.image?.[0]
    if (!filename) return null

    // FRONT_TYPE items reference SVG files from src/assets/svg/
    if (filename.endsWith('.svg')) {
        return svgAssets[`../assets/svg/${filename}`] ?? null
    }

    // FINISH_EXT / FINISH_INT / PULL images are on Cloudflare Images
    return `${CDN_BASE}/${filename}/public`
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function ImgWithFallback({src, alt, imgStyle}: { src: string; alt: string; imgStyle?: React.CSSProperties }) {
    const [failed, setFailed] = useState<boolean>(false)
    useEffect(() => {
        setFailed(false)
    }, [src])
    if (failed) return <span className="img-fallback" aria-hidden="true"/>
    return (
        <img
            src={src}
            alt={alt}
            onError={() => setFailed(true)}
            loading="lazy"
            style={imgStyle}
        />
    )
}

interface ImgFocus {
    scale: number;
    x: string;
    y: string;
    objectFit?: string
}

function Lightbox({src, alt, onClose}: { src: string; alt: string; onClose: () => void }) {
    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
                <img src={src} alt={alt} className="lightbox-img"/>
                <button className="lightbox-close" onClick={onClose} aria-label="Close">✕</button>
            </div>
        </div>
    )
}

function ButtonOption({
                          item,
                          selected,
                          onSelect,
                          imgFocus,
                      }: {
    item: OptionItem
    selected: boolean
    onSelect: () => void
    imgFocus?: ImgFocus
}) {
    const [zoomed, setZoomed] = useState(false)
    const img = getItemImage(item)
    return (
        <>
            <button
                className={`opt-btn${selected ? ' selected' : ''}`}
                onClick={onSelect}
                title={item.label}
                aria-pressed={selected}
            >
                {img && (
                    <span className="opt-btn-img">
            <ImgWithFallback
                src={img}
                alt={item.label}
                imgStyle={imgFocus ? {
                    transform: `scale(${imgFocus.scale})`,
                    transformOrigin: `${imgFocus.x} ${imgFocus.y}`,
                    objectFit: imgFocus.objectFit as React.CSSProperties['objectFit'],
                } : undefined}
            />
                        {imgFocus && (
                            <button
                                className="opt-btn-zoom"
                                onClick={e => {
                                    e.stopPropagation();
                                    setZoomed(true)
                                }}
                                aria-label="Zoom image"
                            >⤢</button>
                        )}
          </span>
                )}
                <span className="opt-btn-label">{item.label}</span>
            </button>
            {zoomed && img && <Lightbox src={img} alt={item.label} onClose={() => setZoomed(false)}/>}
        </>
    )
}

function CircleOption({
                          item,
                          selected,
                          onSelect,
                      }: {
    item: OptionItem
    selected: boolean
    onSelect: () => void
}) {
    const hexColor = getHexColor(item)
    const img = hexColor ? null : getItemImage(item)
    return (
        <button
            className={`opt-circle${selected ? ' selected' : ''}`}
            onClick={onSelect}
            title={item.label}
            aria-pressed={selected}
            aria-label={item.label}
        >
            {hexColor ? (
                <span className="circle-color" style={{background: `#${hexColor}`}}/>
            ) : img ? (
                <ImgWithFallback src={img} alt={item.label}/>
            ) : (
                <span className="circle-text">{item.value.slice(0, 4)}</span>
            )}
        </button>
    )
}

// ─── Moodboard ────────────────────────────────────────────────────────────────

function MoodCard({
                      item,
                      size,
                      role,
                      imgFocus,
                  }: {
    item: OptionItem | undefined
    size: 'lg' | 'md' | 'sm' | 'fr'
    role: string
    imgFocus?: ImgFocus
}) {
    const hexColor = item ? getHexColor(item) : null
    const img = item && !hexColor ? getItemImage(item) : null
    const focusStyle: React.CSSProperties | undefined = imgFocus ? {
        transform: `scale(${imgFocus.scale})`,
        transformOrigin: `${imgFocus.x} ${imgFocus.y}`,
        objectFit: imgFocus.objectFit as React.CSSProperties['objectFit'],
    } : undefined

    return (
        <div className={`mood-card mood-card--${size}`}>
            <div className="mood-card-visual">
                {hexColor ? (
                    <div className="mood-card-color" style={{background: `#${hexColor}`}}/>
                ) : img ? (
                    <ImgWithFallback src={img} alt={item!.label} imgStyle={focusStyle}/>
                ) : (
                    <div className="mood-card-empty"/>
                )}
            </div>
            <div className="mood-card-info">
                <span className="mood-card-role">{role}</span>
                {item && <span className="mood-card-label">{item.label}</span>}
            </div>
        </div>
    )
}

function MoodBoard({
                       extItem,
                       intItem,
                       pullItem,
                       frontItem
                   }: {
    extItem: OptionItem | undefined
    intItem: OptionItem | undefined
    pullItem: OptionItem | undefined
    frontItem: OptionItem | undefined
}) {
    return (
        <div className="moodboard">
            <MoodCard item={frontItem} size="fr" role="Front" imgFocus={FRONT_IMG_FOCUS}/>
            <MoodCard item={intItem} size="md" role="Interior"/>
            <MoodCard item={pullItem} size="sm" role="Pull" imgFocus={PULL_IMG_FOCUS}/>
            <MoodCard item={extItem} size="lg" role="Exterior"/>
        </div>
    )
}

const CIRCLE_PAGE_SIZE = 48

function FieldSection({
                          label,
                          type,
                          items,
                          value,
                          onChange,
                          imgFocus,
                      }: {
    label: string
    type: 'BUTTON' | 'CIRCLE'
    items: OptionItem[]
    value: string
    onChange: (val: string) => void
    imgFocus?: ImgFocus
}) {
    const [showAll, setShowAll] = useState(false)
    const [collapsed, setCollapsed] = useState(false)
    const prevItemsRef = useMemo(() => items, [items])
    // Reset pagination when items list changes
    if (prevItemsRef !== items && showAll) setShowAll(false)

    const visible = type === 'CIRCLE' && !showAll ? items.slice(0, CIRCLE_PAGE_SIZE) : items

    return (
        <div className="field-section">
            <div className="field-header" onClick={() => setCollapsed(v => !v)} style={{cursor: 'pointer'}}>
                <h3 className="field-label">{label}</h3>
                <span className="field-count">{items.length} options</span>
                <span className="field-fold">{collapsed ? '▸' : '▾'}</span>
            </div>

            {!collapsed && (items.length === 0 ? (
                <p className="field-empty">No options available for current selection.</p>
            ) : (
                <>
                    <div className={type === 'CIRCLE' ? 'opts-circle-grid' : 'opts-btn-row'}>
                        {visible.map(item => (
                            type === 'CIRCLE' ? (
                                <CircleOption
                                    key={item.value}
                                    item={item}
                                    selected={item.value === value}
                                    onSelect={() => onChange(item.value)}
                                />
                            ) : (
                                <ButtonOption
                                    key={item.value}
                                    item={item}
                                    selected={item.value === value}
                                    onSelect={() => onChange(item.value)}
                                    imgFocus={imgFocus}
                                />
                            )
                        ))}
                    </div>
                    {type === 'CIRCLE' && items.length > CIRCLE_PAGE_SIZE && (
                        <button className="show-more" onClick={() => setShowAll(v => !v)}>
                            {showAll ? 'Show less' : `Show all ${items.length} options`}
                        </button>
                    )}
                </>
            ))}

            {!collapsed && value && (
                <p className="field-selection">
                    Selected: <strong>{items.find(i => i.value === value)?.label ?? value}</strong>
                    {' '}
                    <code>{value}</code>
                </p>
            )}
        </div>
    )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Configurator() {
    // Raw state: the user's last explicit selection for each field.
    // These may temporarily be invalid when a parent field changes.
    const [collection, setCollection] = useState(() => options.COLLECTION_ITEMS[0]?.value ?? '')
    const [frontType, setFrontType] = useState('')
    const [finishExt, setFinishExt] = useState('')
    const [finishInt, setFinishInt] = useState('')
    const [pullType, setPullType] = useState('')

    // ── Step 1: filter fronts by collection ──────────────────────────────────
    const filteredFronts = useMemo(
        () => getFilteredFronts(collection),
        [collection]
    )
    // "activeFront" is the effective selection: kept if still valid, otherwise
    // autofilled to the first available item. Computed synchronously — no effect needed.
    const activeFront = useMemo(
        () => autofill(filteredFronts, frontType),
        [filteredFronts, frontType]
    )

    // ── Step 2: filter finish ext by ACTIVE front + collection ───────────────
    const filteredFinishExt = useMemo(
        () => getFilteredFinishExt(activeFront, collection),
        [activeFront, collection]
    )
    const activeFinishExt = useMemo(
        () => autofill(filteredFinishExt, finishExt),
        [filteredFinishExt, finishExt]
    )

    // ── Step 3: filter finish int by collection + ACTIVE front + ACTIVE ext ──
    // Using active (not raw state) values ensures this always uses the correct,
    // up-to-date exterior selection — never a stale value from a previous front.
    const filteredFinishInt = useMemo(
        () => getFilteredFinishInt(collection, activeFront, activeFinishExt),
        [collection, activeFront, activeFinishExt]
    )
    const activeFinishInt = useMemo(
        () => autofill(filteredFinishInt, finishInt),
        [filteredFinishInt, finishInt]
    )

    // ── Step 4: filter pulls by ACTIVE front + collection ────────────────────
    const filteredPulls = useMemo(
        () => getFilteredPulls(collection, activeFront, activeFinishExt),
        [collection, activeFront, activeFinishExt]
    )
    const activePull = useMemo(
        () => autofill(filteredPulls, pullType),
        [filteredPulls, pullType]
    )

    // ── Moodboard: resolved item objects for the active selections ──────────────
    const activeExtItem = filteredFinishExt.find(i => i.value === activeFinishExt)
    const activeIntItem = filteredFinishInt.find(i => i.value === activeFinishInt)
    const activePullItem = filteredPulls.find(i => i.value === activePull)
    const activeFrontItem = filteredFronts.find(i => i.value === activeFront)

    return (
        <div className="configurator">
            <header className="configurator-header">
                <h1>Configurator</h1>
                <p className="configurator-subtitle">Select your collection options below — each choice filters the
                    available options downstream.</p>
            </header>

            <div style={{display: 'flex', alignItems: 'start', gap: '32px'}}>

                <div style={{flex: 1, minWidth: 0}}>
                    <MoodBoard
                        extItem={activeExtItem}
                        intItem={activeIntItem}
                        pullItem={activePullItem}
                        frontItem={activeFrontItem}
                    />

                    <footer className="configurator-summary">
                        <h2>Current Configuration</h2>
                        <dl className="summary-grid">
                            <dt>Collection</dt>
                            <dd>{collection || '—'}</dd>
                            <dt>Front</dt>
                            <dd>{activeFront || '—'}</dd>
                            <dt>Exterior</dt>
                            <dd>{activeFinishExt || '—'}</dd>
                            <dt>Interior</dt>
                            <dd>{activeFinishInt || '—'}</dd>
                            <dt>Pull</dt>
                            <dd>{activePull || '—'}</dd>
                        </dl>
                    </footer>
                </div>

                <div className="configurator-body" style={{flex: 1, minWidth: 0}}>
                    <FieldSection
                        label="Collection"
                        type="BUTTON"
                        items={options.COLLECTION_ITEMS}
                        value={collection}
                        onChange={setCollection}
                    />

                    <FieldSection
                        label="Front"
                        type="BUTTON"
                        items={filteredFronts}
                        value={activeFront}
                        onChange={setFrontType}
                        imgFocus={FRONT_IMG_FOCUS}
                    />

                    <FieldSection
                        label="Exterior Finish"
                        type="CIRCLE"
                        items={filteredFinishExt}
                        value={activeFinishExt}
                        onChange={setFinishExt}
                    />

                    <FieldSection
                        label="Interior Finish"
                        type="CIRCLE"
                        items={filteredFinishInt}
                        value={activeFinishInt}
                        onChange={setFinishInt}
                    />


                    <FieldSection
                        label="Pull"
                        type="BUTTON"
                        items={filteredPulls}
                        value={activePull}
                        onChange={setPullType}
                        imgFocus={PULL_IMG_FOCUS}
                    />
                </div>
            </div>
        </div>
    )
}
