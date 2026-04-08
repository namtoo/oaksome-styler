const form = {
    id: 1,
    type: "TAB",
    render: "SECTION",
    name: "configurator",
    label: "Configurator",
    defaultValue: "overview",
    defaultVars: {
        C1_Right: "CS_LA_CLAMEX_14_BS_TOP",
        C1_TS_Left: "CS_LA_CLAMEX_14_FS_BOT",
        C1_TS_Right: "CS_LA_CLAMEX_14_FS_BOT",
        C1_Left: "CS_LA_CLAMEX_14_BS_TOP",
        C1_FS_Left: "CS_LA_CLAMEX_14_FS_BOT",
        C1_FS_Right: "CS_LA_CLAMEX_14_FS_BOT"
    },
    props: {
        variant: "buttons",
        fullWidth: true
    },
    children: [
        {
            id: 11,
            type: "TAB",
            render: "SECTION",
            name: "overview",
            label: "Overview",
            children: [
                {
                    id: 111,
                    type: "NONE",
                    render: "SECTION",
                    name: "form",
                    label: "Form",
                    children: [
                        {
                            id: 1111,
                            type: "COMBO",
                            render: "FIELD",
                            name: "INSTALLATION_TYPE",
                            label: "Installation type",
                            defaultValue: "BUILT_IN",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "INSTALLATION_TYPE_ITEMS"
                                ]
                            },
                            variables: [
                                {
                                    name: "IS_BI_L",
                                    path: "$data.IS_BI_L",
                                    type: "num"
                                },
                                {
                                    name: "IS_BI_R",
                                    path: "$data.IS_BI_R",
                                    type: "num"
                                }
                            ]
                        },
                        {
                            id: 1112,
                            type: "COMBO",
                            render: "FIELD",
                            name: "SHAPE_LAYOUT_LEFT",
                            label: "Corner usage",
                            defaultValue: "SHAPE_LAYOUT_LEFT_01",
                            props: {
                                type: "BUTTON",
                                options: [
                                    "SHAPE_LAYOUT_LEFT_ITEMS"
                                ]
                            },
                            variables: [
                                {
                                    name: "IS_LL_P",
                                    path: "$data.IS_LL_P",
                                    type: "num"
                                },
                                {
                                    name: "IS_RL_N",
                                    path: "$data.IS_RL_N",
                                    type: "num"
                                }
                            ]
                        },
                        {
                            id: 1114,
                            type: "INPUT",
                            render: "FIELD",
                            name: "OV_HEIGHT",
                            label: "Height",
                            defaultValue: 3000,
                            props: {
                                min: 1800,
                                max: 3500,
                                type: "SLIDER"
                            },
                            variables: [
                                {
                                    name: "ZONE_H",
                                    path: ".",
                                    type: "num"
                                }
                            ]
                        },
                        {
                            render: "FIELD",
                            id: 1115,
                            name: "OV_DRAWER_TYPE",
                            label: "Drawer type",
                            type: "COMBO",
                            defaultValue: "INTERIOR",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "DRAWER_TYPE_ITEMS"
                                ]
                            }
                        },
                        {
                            id: 1116,
                            type: "ACCORDION",
                            name: "fillers",
                            label: "Fillers",
                            render: "SECTION",
                            children: [
                                {
                                    id: 11161,
                                    label: "Top",
                                    name: "FILLER_TOP",
                                    type: "INPUT",
                                    render: "FIELD",
                                    props: {
                                        min: 30,
                                        max: 500,
                                        type: "SLIDER"
                                    },
                                    variables: [
                                        {
                                            name: "CROWN_HEIGHT",
                                            path: ".",
                                            type: "num"
                                        }
                                    ]
                                },
                                {
                                    id: 11162,
                                    render: "FIELD",
                                    label: "Left",
                                    name: "FILLER_LEFT",
                                    type: "INPUT",
                                    props: {
                                        min: 50,
                                        max: 1000,
                                        type: "SLIDER"
                                    },
                                    variables: [
                                        {
                                            name: "ZFL_W",
                                            path: ".",
                                            type: "num"
                                        }
                                    ],
                                    dependencies: [
                                        {
                                            nod: 1,
                                            action: "SHOW",
                                            roles: [
                                                {
                                                    operator: "OR",
                                                    roles: [
                                                        {
                                                            field: "INSTALLATION_TYPE",
                                                            comparison: "=",
                                                            value: "BUILT_IN"
                                                        },
                                                        {
                                                            field: "INSTALLATION_TYPE",
                                                            comparison: "=",
                                                            value: "BUILT_IN_LEFT"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 11163,
                                    render: "FIELD",
                                    label: "Right",
                                    name: "FILLER_RIGHT",
                                    type: "INPUT",
                                    props: {
                                        min: 50,
                                        max: 1000,
                                        type: "SLIDER"
                                    },
                                    variables: [
                                        {
                                            name: "ZFR_W",
                                            path: ".",
                                            type: "num"
                                        }
                                    ],
                                    dependencies: [
                                        {
                                            nod: 1,
                                            action: "SHOW",
                                            roles: [
                                                {
                                                    operator: "OR",
                                                    roles: [
                                                        {
                                                            field: "INSTALLATION_TYPE",
                                                            comparison: "=",
                                                            value: "BUILT_IN"
                                                        },
                                                        {
                                                            field: "INSTALLATION_TYPE",
                                                            comparison: "=",
                                                            value: "BUILT_IN_RIGHT"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 11164,
                                    label: "Bottm",
                                    name: "FILLER_BOTTOM",
                                    type: "INPUT",
                                    render: "FIELD",
                                    props: {
                                        min: 30,
                                        max: 200,
                                        type: "SLIDER"
                                    },
                                    variables: [
                                        {
                                            name: "BASE_HEIGHT",
                                            path: ".",
                                            type: "num"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 112,
                    type: "NONE",
                    render: "SECTION",
                    name: "styler",
                    label: "Styler",
                    children: [
                        {
                            id: 1121,
                            type: "COMBO",
                            render: "FIELD",
                            name: "OV_DESIGN_STYLE",
                            label: "Design style",
                            defaultValue: "STYLE_01",
                            props: {
                                type: "BUTTON",
                                image: true,
                                options: [
                                    "DESIGN_STYLE_ITEMS"
                                ]
                            }
                        },
                        {
                            id: 1122,
                            type: "COMBO",
                            render: "FIELD",
                            name: "OV_FRONT_TYPE",
                            label: "Front",
                            defaultValue: "FRONT_01",
                            props: {
                                type: "BUTTON",
                                image: true,
                                options: [
                                    "FRONT_TYPE_ITEMS"
                                ]
                            },
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "OV_DESIGN_STYLE",
                                                    comparaison: "=",
                                                    value: "$data.style"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            variables: [
                                {
                                    name: "Door_Name",
                                    path: "$data.door_type",
                                    type: "None"
                                }
                            ]
                        },
                        {
                            id: 1123,
                            type: "COMBO",
                            render: "FIELD",
                            name: "OV_FINISH_EXT",
                            label: "Exterior",
                            defaultValue: "STYLE_01_FRONT_10_DE_VN_HGS_MDF_S4_01_19_NO_SURF_NO_SURF",
                            props: {
                                image: true,
                                type: "CIRCLE",
                                options: [
                                    "FINISH_EXT_ITEMS"
                                ]
                            },
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "OV_FRONT_TYPE",
                                                    comparaison: "=",
                                                    value: "$data.front"
                                                },
                                                {
                                                    field: "OV_DESIGN_STYLE",
                                                    comparaison: "=",
                                                    value: "$data.style"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            variables: [
                                {
                                    name: "MAT_FR_1",
                                    path: "$data.material",
                                    type: "mat"
                                },
                                {
                                    name: "MAT_FR_1_THK",
                                    path: "$data.mat_fr_thk",
                                    type: "num"
                                },
                                {
                                    name: "SRF_FR_1_TOP",
                                    path: "$data.surface_top",
                                    type: "surf"
                                },
                                {
                                    name: "SRF_FR_1_BOT",
                                    path: "$data.surface_bot",
                                    type: "surf"
                                },
                                {
                                    name: "SRF_FR_1_THK",
                                    path: "$data.srf_fr_thk",
                                    type: "num"
                                },
                                {
                                    name: "PRF_FR_1",
                                    path: "$data.profile",
                                    type: "none"
                                },
                                {
                                    name: "FI_1_THK",
                                    path: "$data.filler_thk",
                                    type: "num"
                                }
                            ]
                        },
                        {
                            id: 1124,
                            type: "COMBO",
                            render: "FIELD",
                            name: "OV_FINISH_INT",
                            label: "Interior",
                            props: {
                                image: true,
                                type: "CIRCLE",
                                options: [
                                    "FINISH_INT_ITEMS"
                                ]
                            },
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "OV_DESIGN_STYLE",
                                                    comparaison: "=",
                                                    value: "$data.style"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            variables: [
                                {
                                    name: "MAT_1",
                                    path: "$data.material",
                                    type: "mat"
                                },
                                {
                                    name: "MAT_1_THK",
                                    path: "$data.mat_thk",
                                    type: "num"
                                },
                                {
                                    name: "MAT_DSI_1",
                                    path: "$data.drawer_material",
                                    type: "mat"
                                },
                                {
                                    name: "MAT_DBK_1",
                                    path: "$data.drawer_material",
                                    type: "mat"
                                },
                                {
                                    name: "SRF_1_TOP",
                                    path: "$data.surface_top",
                                    type: "surf"
                                },
                                {
                                    name: "SRF_1_BOT",
                                    path: "$data.surface_bot",
                                    type: "surf"
                                },
                                {
                                    name: "SRF_1_THK",
                                    path: "$data.srf_thk",
                                    type: "num"
                                },
                                {
                                    name: "PRF_1",
                                    path: "$data.profile",
                                    type: "none"
                                }
                            ]
                        },
                        {
                            id: 1125,
                            type: "COMBO",
                            render: "FIELD",
                            name: "OV_PULL_TYPE",
                            label: "Pull",
                            props: {
                                image: true,
                                type: "BUTTON",
                                options: [
                                    "PULL_ITEMS"
                                ]
                            },
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "OV_DESIGN_STYLE",
                                                    comparaison: "=",
                                                    value: "$data.style"
                                                },
                                                {
                                                    field: "OV_PULL_TYPE",
                                                    comparaison: "=",
                                                    value: "TIPON"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            variables: [
                                {
                                    name: "Handle_Type",
                                    path: "$data.handle_type",
                                    type: "none"
                                },
                                {
                                    name: "HINGE_OPTION",
                                    path: "$data.hinge_option",
                                    type: "none"
                                },
                                {
                                    name: "DR_EXT_SLIDE_TYPE_01",
                                    path: "$data.drawer_slide_type",
                                    type: "none"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "OR",
                                            roles: [
                                                {
                                                    field: "OV_FRONT_TYPE.data.have_pull",
                                                    comparison: "=",
                                                    value: "Yes"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 12,
            type: "TAB",
            render: "SECTION",
            name: "left",
            label: "Left",
            goToZone: "0.1.0.1.1",
            children: [
                {
                    id: 111,
                    type: "NONE",
                    render: "SECTION",
                    name: "form",
                    label: "Form",
                    children: [
                        {
                            id: 1113,
                            type: "INPUT",
                            render: "FIELD",
                            name: "ZL_WIDTH",
                            label: "Width",
                            defaultValue: 3200,
                            props: {
                                min: 400,
                                max: 6000,
                                type: "SLIDER"
                            },
                            variables: [
                                {
                                    name: "ZL_W",
                                    path: ".",
                                    type: "num"
                                }
                            ]
                        },
                        {
                            id: 1114,
                            type: "INPUT",
                            render: "FIELD",
                            name: "ZL_DEPTH",
                            label: "Depth",
                            defaultValue: 500,
                            props: {
                                min: 350,
                                max: 800,
                                type: "SLIDER"
                            },
                            variables: [
                                {
                                    name: "ZL_D",
                                    path: ".",
                                    type: "num"
                                }
                            ]
                        },
                        {
                            id: 1115,
                            type: "INPUT",
                            render: "FIELD",
                            name: "ZL_CNT",
                            label: "Number of articles",
                            defaultValue: 8,
                            props: {
                                min: "&round($ZL_WIDTH/500)",
                                max: "&round($ZL_WIDTH/400)",
                                type: "SLIDER"
                            },
                            variables: [
                                {
                                    name: "ZL_CNT",
                                    type: "num",
                                    path: "."
                                }
                            ]
                        },
                        {
                            id: 1116,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_DRAWER_TYPE",
                            label: "Drawer type",
                            autofill: [
                                "ZL_ARTICLE_SELECT"
                            ],
                            defaultValue: "INTERIOR",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "DRAWER_TYPE_ITEMS"
                                ]
                            }
                        }
                    ]
                },
                {
                    id: 112,
                    type: "NONE",
                    render: "SECTION",
                    name: "styler",
                    label: "Styler",
                    children: [
                        {
                            id: 1121,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_DESIGN_STYLE",
                            label: "Design style",
                            defaultValue: "STYLE_01",
                            props: {
                                type: "BUTTON",
                                image: true,
                                options: [
                                    "DESIGN_STYLE_ITEMS"
                                ]
                            }
                        },
                        {
                            id: 1122,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_FRONT_TYPE",
                            label: "Front",
                            defaultValue: "FRONT_01",
                            props: {
                                type: "BUTTON",
                                image: true,
                                options: [
                                    "FRONT_TYPE_ITEMS"
                                ]
                            },
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_DESIGN_STYLE",
                                                    comparaison: "=",
                                                    value: "$data.style"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            variables: [
                                {
                                    name: "Door_Name",
                                    path: "$data.door_type",
                                    type: "None"
                                }
                            ]
                        },
                        {
                            id: 1123,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_FINISH_EXT",
                            label: "Exterior",
                            defaultValue: "STYLE_01_FRONT_01_UN_EV_HGS_MDF_0H913_V2A_12_NO_SURF_NO_SURF",
                            props: {
                                image: true,
                                type: "CIRCLE",
                                options: [
                                    "FINISH_EXT_ITEMS"
                                ]
                            },
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_FRONT_TYPE",
                                                    comparaison: "=",
                                                    value: "$data.front"
                                                },
                                                {
                                                    field: "ZL_DESIGN_STYLE",
                                                    comparaison: "=",
                                                    value: "$data.style"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            variables: [
                                {
                                    name: "MAT_FR_1",
                                    path: "$data.material",
                                    type: "mat"
                                },
                                {
                                    name: "MAT_FR_1_THK",
                                    path: "$data.mat_fr_thk",
                                    type: "num"
                                },
                                {
                                    name: "SRF_FR_1_TOP",
                                    path: "$data.surface_top",
                                    type: "surf"
                                },
                                {
                                    name: "SRF_FR_1_BOT",
                                    path: "$data.surface_bot",
                                    type: "surf"
                                },
                                {
                                    name: "SRF_FR_1_THK",
                                    path: "$data.srf_fr_thk",
                                    type: "num"
                                },
                                {
                                    name: "PRF_FR_1",
                                    path: "$data.profile",
                                    type: "none"
                                },
                                {
                                    name: "FI_1_THK",
                                    path: "$data.filler_thk",
                                    type: "num"
                                }
                            ]
                        },
                        {
                            id: 1124,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_FINISH_INT",
                            label: "Interior",
                            defaultValue: "STYLE_01_1_UN_0H397_BST",
                            props: {
                                image: true,
                                type: "CIRCLE",
                                options: [
                                    "FINISH_INT_ITEMS"
                                ]
                            },
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_DESIGN_STYLE",
                                                    comparaison: "=",
                                                    value: "$data.style"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            variables: [
                                {
                                    name: "MAT_1",
                                    path: "$data.material",
                                    type: "mat"
                                },
                                {
                                    name: "MAT_1_THK",
                                    path: "$data.mat_thk",
                                    type: "num"
                                },
                                {
                                    name: "MAT_DSI_1",
                                    path: "$data.drawer_material",
                                    type: "mat"
                                },
                                {
                                    name: "MAT_DBK_1",
                                    path: "$data.drawer_material",
                                    type: "mat"
                                },
                                {
                                    name: "SRF_1_TOP",
                                    path: "$data.surface_top",
                                    type: "surf"
                                },
                                {
                                    name: "SRF_1_BOT",
                                    path: "$data.surface_bot",
                                    type: "surf"
                                },
                                {
                                    name: "SRF_1_THK",
                                    path: "$data.srf_thk",
                                    type: "num"
                                },
                                {
                                    name: "PRF_1",
                                    path: "$data.profile",
                                    type: "none"
                                }
                            ]
                        },
                        {
                            id: 1125,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_PULL_TYPE",
                            label: "Pull",
                            props: {
                                image: true,
                                type: "BUTTON",
                                options: [
                                    "PULL_ITEMS"
                                ]
                            },
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_DESIGN_STYLE",
                                                    comparaison: "=",
                                                    value: "$data.style"
                                                },
                                                {
                                                    field: "ZL_PULL_TYPE",
                                                    comparaison: "=",
                                                    value: "TIPON"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            variables: [
                                {
                                    name: "Handle_Type",
                                    path: "$data.handle_type",
                                    type: "none"
                                },
                                {
                                    name: "HINGE_OPTION",
                                    path: "$data.hinge_option",
                                    type: "none"
                                },
                                {
                                    name: "DR_EXT_SLIDE_TYPE_01",
                                    path: "$data.drawer_slide_type",
                                    type: "none"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "OR",
                                            roles: [
                                                {
                                                    field: "ZL_FRONT_TYPE.data.have_pull",
                                                    comparison: "=",
                                                    value: "Yes"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 113,
                    type: "NONE",
                    render: "SECTION",
                    name: "function",
                    label: "Function",
                    children: [
                        {
                            id: 1131,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_MODULE",
                            label: "Column",
                            defaultValue: "1",
                            props: {
                                type: "COLUMN",
                                options: [
                                    "ZL_COLUMN_LIST"
                                ]
                            },
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "OR",
                                            roles: [
                                                {
                                                    field: "ZL_CNT",
                                                    comparaison: ">=",
                                                    value: "$data.nbrCount"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1132,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_ARTICLE_SELECT",
                            label: "Select Article",
                            defaultValue: "",
                            props: {
                                type: "BUTTON",
                                image: true,
                                options: [
                                    "ARTICLE_ITEMS"
                                ]
                            },
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_DRAWER_TYPE",
                                                    comparaison: "IN",
                                                    value: "$data.drawer_type"
                                                },
                                                {
                                                    field: "&($ZL_MODULE==1)?'ZL_DOOR_TYPE_01':&($ZL_MODULE==2)?'ZL_DOOR_TYPE_02':&($ZL_MODULE==3)?'ZL_DOOR_TYPE_03':&($ZL_MODULE==4)?'ZL_DOOR_TYPE_04':&($ZL_MODULE==5)?'ZL_DOOR_TYPE_05':&($ZL_MODULE==6)?'ZL_DOOR_TYPE_06':&($ZL_MODULE==7)?'ZL_DOOR_TYPE_07':&($ZL_MODULE==8)?'ZL_DOOR_TYPE_08':&($ZL_MODULE==9)?'ZL_DOOR_TYPE_09':&($ZL_MODULE==10)?'ZL_DOOR_TYPE_10':&($ZL_MODULE==11)?'ZL_DOOR_TYPE_11':&($ZL_MODULE==12)?'ZL_DOOR_TYPE_12':&($ZL_MODULE==13)?'ZL_DOOR_TYPE_13':&($ZL_MODULE==14)?'ZL_DOOR_TYPE_14':'ZL_DOOR_TYPE_15'",
                                                    comparaison: "=",
                                                    value: "$data.door_type"
                                                },
                                                {
                                                    field: "SHAPE_LAYOUT_LEFT.data.article_type",
                                                    comparaison: "IN",
                                                    value: "$data.article_type"
                                                },
                                                {
                                                    field: "&($IS_LL_P * ZL_MODULE == 1 ? 1 : 0)",
                                                    comparaison: "=",
                                                    value: "$data.is_extreme"
                                                },
                                                {
                                                    operator: "OR",
                                                    roles: [
                                                        {
                                                            operator: "AND",
                                                            roles: [
                                                                {
                                                                    field: "ZL_HAS_DRAWER",
                                                                    comparaison: "=",
                                                                    value: "$data.drawer"
                                                                },
                                                                {
                                                                    field: "ZL_HAS_HANGER",
                                                                    comparaison: "=",
                                                                    value: "$data.hanger"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            operator: "AND",
                                                            roles: [
                                                                {
                                                                    field: "ZL_HAS_HANGER",
                                                                    comparaison: "=",
                                                                    value: false
                                                                },
                                                                {
                                                                    field: "ZL_HAS_DRAWER",
                                                                    comparaison: "=",
                                                                    value: false
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            variables: [
                                {
                                    name: "WACA_WIDTH",
                                    path: "$data.door_width",
                                    type: "num"
                                }
                            ]
                        },
                        {
                            id: 1134,
                            type: "ROW",
                            name: "filters_section",
                            label: "Filters",
                            render: "SECTION",
                            children: [
                                {
                                    id: 11341,
                                    render: "FIELD",
                                    type: "CHECKBOX",
                                    label: "Has hanger",
                                    name: "ZL_HAS_HANGER",
                                    defaultValue: true
                                },
                                {
                                    id: 11342,
                                    render: "FIELD",
                                    type: "CHECKBOX",
                                    label: "Has Drawer",
                                    name: "ZL_HAS_DRAWER",
                                    defaultValue: true,
                                    dependencies: [
                                        {
                                            nod: 1,
                                            action: "SHOW",
                                            roles: [
                                                {
                                                    operator: "OR",
                                                    roles: [
                                                        {
                                                            field: "ZL_ARTICLE_SELECT.data.article_type",
                                                            comparison: "=",
                                                            value: "MD_CL_CR",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1135,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_DOOR_TYPE_01",
                            label: "Door type",
                            autofill: [
                                "ZL_ARTICLE_SELECT"
                            ],
                            defaultValue: "SINGLE",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "ZL_SINGLEDOUBLE_01"
                                ]
                            },
                            variables: [
                                {
                                    name: "ZL_CNT_01",
                                    path: "$data.count",
                                    type: "num"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_MODULE",
                                                    comparison: "=",
                                                    value: "1"
                                                },
                                                {
                                                    field: "ZL_WIDTH",
                                                    comparison: ">",
                                                    value: "ZL_MODULE.data.accumulated_width"
                                                },
                                                {
                                                    field: "ZL_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ],
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_WIDTH",
                                                    comparaison: ">=",
                                                    value: "$data.accumulated_width"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1136,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_DOOR_TYPE_02",
                            label: "Door type",
                            autofill: [
                                "ZL_ARTICLE_SELECT"
                            ],
                            defaultValue: "DOUBLE",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "ZL_SINGLEDOUBLE_02"
                                ]
                            },
                            variables: [
                                {
                                    name: "ZL_CNT_02",
                                    path: "$data.count",
                                    type: "num"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_MODULE",
                                                    comparison: "=",
                                                    value: "2"
                                                },
                                                {
                                                    field: "ZL_WIDTH",
                                                    comparison: ">=",
                                                    value: "ZL_MODULE.data.accumulated_width"
                                                },
                                                {
                                                    field: "ZL_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ],
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_WIDTH",
                                                    comparaison: ">=",
                                                    value: "$data.accumulated_width"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1137,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_DOOR_TYPE_03",
                            label: "Door type",
                            autofill: [
                                "ZL_ARTICLE_SELECT"
                            ],
                            defaultValue: "DOUBLE",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "ZL_SINGLEDOUBLE_03"
                                ]
                            },
                            variables: [
                                {
                                    name: "ZL_CNT_03",
                                    path: "$data.count",
                                    type: "num"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_MODULE",
                                                    comparison: "=",
                                                    value: "3"
                                                },
                                                {
                                                    field: "ZL_WIDTH",
                                                    comparison: ">",
                                                    value: "ZL_MODULE.data.accumulated_width"
                                                },
                                                {
                                                    field: "ZL_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ],
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_WIDTH",
                                                    comparaison: ">=",
                                                    value: "$data.accumulated_width"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1138,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_DOOR_TYPE_04",
                            label: "Door type",
                            autofill: [
                                "ZL_ARTICLE_SELECT"
                            ],
                            defaultValue: "DOUBLE",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "ZL_SINGLEDOUBLE_04"
                                ]
                            },
                            variables: [
                                {
                                    name: "ZL_CNT_04",
                                    path: "$data.count",
                                    type: "num"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_MODULE",
                                                    comparison: "=",
                                                    value: "4"
                                                },
                                                {
                                                    field: "ZL_WIDTH",
                                                    comparison: ">",
                                                    value: "ZL_MODULE.data.accumulated_width"
                                                },
                                                {
                                                    field: "ZL_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ],
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_WIDTH",
                                                    comparaison: ">=",
                                                    value: "$data.accumulated_width"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1139,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_DOOR_TYPE_05",
                            label: "Door type",
                            autofill: [
                                "ZL_ARTICLE_SELECT"
                            ],
                            defaultValue: "DOUBLE",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "ZL_SINGLEDOUBLE_05"
                                ]
                            },
                            variables: [
                                {
                                    name: "ZL_CNT_05",
                                    path: "$data.count",
                                    type: "num"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_MODULE",
                                                    comparison: "=",
                                                    value: "5"
                                                },
                                                {
                                                    field: "ZL_WIDTH",
                                                    comparison: ">",
                                                    value: "ZL_MODULE.data.accumulated_width"
                                                },
                                                {
                                                    field: "ZL_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ],
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_WIDTH",
                                                    comparaison: ">=",
                                                    value: "$data.accumulated_width"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1140,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_DOOR_TYPE_06",
                            label: "Door type",
                            autofill: [
                                "ZL_ARTICLE_SELECT"
                            ],
                            defaultValue: "DOUBLE",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "ZL_SINGLEDOUBLE_06"
                                ]
                            },
                            variables: [
                                {
                                    name: "ZL_CNT_06",
                                    path: "$data.count",
                                    type: "num"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_MODULE",
                                                    comparison: "=",
                                                    value: "6"
                                                },
                                                {
                                                    field: "ZL_WIDTH",
                                                    comparison: ">",
                                                    value: "ZL_MODULE.data.accumulated_width"
                                                },
                                                {
                                                    field: "ZL_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ],
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_WIDTH",
                                                    comparaison: ">=",
                                                    value: "$data.accumulated_width"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1141,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_DOOR_TYPE_07",
                            label: "Door type",
                            autofill: [
                                "ZL_ARTICLE_SELECT"
                            ],
                            defaultValue: "DOUBLE",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "ZL_SINGLEDOUBLE_07"
                                ]
                            },
                            variables: [
                                {
                                    name: "ZL_CNT_07",
                                    path: "$data.count",
                                    type: "num"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_MODULE",
                                                    comparison: "=",
                                                    value: "7"
                                                },
                                                {
                                                    field: "ZL_WIDTH",
                                                    comparison: ">",
                                                    value: "ZL_MODULE.data.accumulated_width"
                                                },
                                                {
                                                    field: "ZL_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ],
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_WIDTH",
                                                    comparaison: ">=",
                                                    value: "$data.accumulated_width"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1142,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_DOOR_TYPE_08",
                            label: "Door type",
                            autofill: [
                                "ZL_ARTICLE_SELECT"
                            ],
                            defaultValue: "SINGLE",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "ZL_SINGLEDOUBLE_08"
                                ]
                            },
                            variables: [
                                {
                                    name: "ZL_CNT_08",
                                    path: "$data.count",
                                    type: "num"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_MODULE",
                                                    comparison: "=",
                                                    value: "8"
                                                },
                                                {
                                                    field: "ZL_WIDTH",
                                                    comparison: ">",
                                                    value: "ZL_MODULE.data.accumulated_width"
                                                },
                                                {
                                                    field: "ZL_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ],
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_WIDTH",
                                                    comparaison: ">=",
                                                    value: "$data.accumulated_width"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1143,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_DOOR_TYPE_09",
                            label: "Door type",
                            autofill: [
                                "ZL_ARTICLE_SELECT"
                            ],
                            defaultValue: "DOUBLE",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "ZL_SINGLEDOUBLE_09"
                                ]
                            },
                            variables: [
                                {
                                    name: "ZL_CNT_09",
                                    path: "$data.count",
                                    type: "num"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_MODULE",
                                                    comparison: "=",
                                                    value: "9"
                                                },
                                                {
                                                    field: "ZL_WIDTH",
                                                    comparison: ">",
                                                    value: "ZL_MODULE.data.accumulated_width"
                                                },
                                                {
                                                    field: "ZL_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ],
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_WIDTH",
                                                    comparaison: ">=",
                                                    value: "$data.accumulated_width"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1144,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_DOOR_TYPE_10",
                            label: "Door type",
                            autofill: [
                                "ZL_ARTICLE_SELECT"
                            ],
                            defaultValue: "DOUBLE",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "ZL_SINGLEDOUBLE_10"
                                ]
                            },
                            variables: [
                                {
                                    name: "ZL_CNT_10",
                                    path: "$data.count",
                                    type: "num"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_MODULE",
                                                    comparison: "=",
                                                    value: "10"
                                                },
                                                {
                                                    field: "ZL_WIDTH",
                                                    comparison: ">",
                                                    value: "ZL_MODULE.data.accumulated_width"
                                                },
                                                {
                                                    field: "ZL_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ],
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_WIDTH",
                                                    comparaison: ">=",
                                                    value: "$data.accumulated_width"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1145,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_DOOR_TYPE_11",
                            label: "Door type",
                            autofill: [
                                "ZL_ARTICLE_SELECT"
                            ],
                            defaultValue: "DOUBLE",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "ZL_SINGLEDOUBLE_11"
                                ]
                            },
                            variables: [
                                {
                                    name: "ZL_CNT_11",
                                    path: "$data.count",
                                    type: "num"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_MODULE",
                                                    comparison: "=",
                                                    value: "11"
                                                },
                                                {
                                                    field: "ZL_WIDTH",
                                                    comparison: ">",
                                                    value: "ZL_MODULE.data.accumulated_width"
                                                },
                                                {
                                                    field: "ZL_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ],
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_WIDTH",
                                                    comparaison: ">=",
                                                    value: "$data.accumulated_width"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1146,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_DOOR_TYPE_12",
                            label: "Door type",
                            autofill: [
                                "ZL_ARTICLE_SELECT"
                            ],
                            defaultValue: "DOUBLE",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "ZL_SINGLEDOUBLE_12"
                                ]
                            },
                            variables: [
                                {
                                    name: "ZL_CNT_12",
                                    path: "$data.count",
                                    type: "num"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_MODULE",
                                                    comparison: "=",
                                                    value: "12"
                                                },
                                                {
                                                    field: "ZL_WIDTH",
                                                    comparison: ">",
                                                    value: "ZL_MODULE.data.accumulated_width"
                                                },
                                                {
                                                    field: "ZL_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ],
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_WIDTH",
                                                    comparaison: ">=",
                                                    value: "$data.accumulated_width"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1147,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_DOOR_TYPE_13",
                            label: "Door type",
                            autofill: [
                                "ZL_ARTICLE_SELECT"
                            ],
                            defaultValue: "DOUBLE",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "ZL_SINGLEDOUBLE_13"
                                ]
                            },
                            variables: [
                                {
                                    name: "ZL_CNT_13",
                                    path: "$data.count",
                                    type: "num"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_MODULE",
                                                    comparison: "=",
                                                    value: "13"
                                                },
                                                {
                                                    field: "ZL_WIDTH",
                                                    comparison: ">",
                                                    value: "ZL_MODULE.data.accumulated_width"
                                                },
                                                {
                                                    field: "ZL_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ],
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_WIDTH",
                                                    comparaison: ">=",
                                                    value: "$data.accumulated_width"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1148,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_DOOR_TYPE_14",
                            label: "Door type",
                            autofill: [
                                "ZL_ARTICLE_SELECT"
                            ],
                            defaultValue: "DOUBLE",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "ZL_SINGLEDOUBLE_14"
                                ]
                            },
                            variables: [
                                {
                                    name: "ZL_CNT_14",
                                    path: "data.count",
                                    type: "num"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_MODULE",
                                                    comparison: "=",
                                                    value: "14"
                                                },
                                                {
                                                    field: "ZL_WIDTH",
                                                    comparison: ">",
                                                    value: "ZL_MODULE.data.accumulated_width"
                                                },
                                                {
                                                    field: "ZL_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ],
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_WIDTH",
                                                    comparaison: ">=",
                                                    value: "$data.accumulated_width"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1149,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_HINGE_SIDE_01",
                            label: "Opening side",
                            directImpact: true,
                            defaultValue: "LEFT",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "HINGE_SIDE"
                                ]
                            },
                            variables: [
                                {
                                    name: "Hinge_Side_nbr",
                                    path: "$data.hinge_side_nbr",
                                    type: "text"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_MODULE",
                                                    comparison: "=",
                                                    value: "1"
                                                },
                                                {
                                                    field: "ZL_DOOR_TYPE_01",
                                                    comparison: "=",
                                                    value: "SINGLE"
                                                },
                                                {
                                                    field: "ZL_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1150,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_HINGE_SIDE_02",
                            label: "Opening side",
                            directImpact: true,
                            defaultValue: "LEFT",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "HINGE_SIDE"
                                ]
                            },
                            variables: [
                                {
                                    name: "Hinge_Side_nbr",
                                    path: "$data.hinge_side_nbr",
                                    type: "text"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_MODULE",
                                                    comparison: "=",
                                                    value: "2"
                                                },
                                                {
                                                    field: "ZL_DOOR_TYPE_02",
                                                    comparison: "=",
                                                    value: "SINGLE"
                                                },
                                                {
                                                    field: "ZL_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1151,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_HINGE_SIDE_03",
                            label: "Opening side",
                            directImpact: true,
                            defaultValue: "LEFT",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "HINGE_SIDE"
                                ]
                            },
                            variables: [
                                {
                                    name: "Hinge_Side_nbr",
                                    path: "$data.hinge_side_nbr",
                                    type: "text"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_MODULE",
                                                    comparison: "=",
                                                    value: "3"
                                                },
                                                {
                                                    field: "ZL_DOOR_TYPE_03",
                                                    comparison: "=",
                                                    value: "SINGLE"
                                                },
                                                {
                                                    field: "ZL_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1152,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_HINGE_SIDE_04",
                            label: "Opening side",
                            directImpact: true,
                            defaultValue: "LEFT",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "HINGE_SIDE"
                                ]
                            },
                            variables: [
                                {
                                    name: "Hinge_Side_nbr",
                                    path: "$data.hinge_side_nbr",
                                    type: "text"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_MODULE",
                                                    comparison: "=",
                                                    value: "4"
                                                },
                                                {
                                                    field: "ZL_DOOR_TYPE_04",
                                                    comparison: "=",
                                                    value: "SINGLE"
                                                },
                                                {
                                                    field: "ZL_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1153,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_HINGE_SIDE_05",
                            label: "Opening side",
                            directImpact: true,
                            defaultValue: "LEFT",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "HINGE_SIDE"
                                ]
                            },
                            variables: [
                                {
                                    name: "Hinge_Side_nbr",
                                    path: "$data.hinge_side_nbr",
                                    type: "text"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_MODULE",
                                                    comparison: "=",
                                                    value: "5"
                                                },
                                                {
                                                    field: "ZL_DOOR_TYPE_05",
                                                    comparison: "=",
                                                    value: "SINGLE"
                                                },
                                                {
                                                    field: "ZL_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1154,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_HINGE_SIDE_06",
                            label: "Opening side",
                            directImpact: true,
                            defaultValue: "LEFT",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "HINGE_SIDE"
                                ]
                            },
                            variables: [
                                {
                                    name: "Hinge_Side_nbr",
                                    path: "$data.hinge_side_nbr",
                                    type: "text"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_MODULE",
                                                    comparison: "=",
                                                    value: "6"
                                                },
                                                {
                                                    field: "ZL_DOOR_TYPE_06",
                                                    comparison: "=",
                                                    value: "SINGLE"
                                                },
                                                {
                                                    field: "ZL_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1155,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_HINGE_SIDE_07",
                            label: "Opening side",
                            directImpact: true,
                            defaultValue: "LEFT",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "HINGE_SIDE"
                                ]
                            },
                            variables: [
                                {
                                    name: "Hinge_Side_nbr",
                                    path: "$data.hinge_side_nbr",
                                    type: "text"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_MODULE",
                                                    comparison: "=",
                                                    value: "7"
                                                },
                                                {
                                                    field: "ZL_DOOR_TYPE_07",
                                                    comparison: "=",
                                                    value: "SINGLE"
                                                },
                                                {
                                                    field: "ZL_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1156,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_HINGE_SIDE_08",
                            label: "Opening side",
                            directImpact: true,
                            defaultValue: "LEFT",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "HINGE_SIDE"
                                ]
                            },
                            variables: [
                                {
                                    name: "Hinge_Side_nbr",
                                    path: "$data.hinge_side_nbr",
                                    type: "text"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_MODULE",
                                                    comparison: "=",
                                                    value: "8"
                                                },
                                                {
                                                    field: "ZL_DOOR_TYPE_08",
                                                    comparison: "=",
                                                    value: "SINGLE"
                                                },
                                                {
                                                    field: "ZL_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1157,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_HINGE_SIDE_09",
                            label: "Opening side",
                            directImpact: true,
                            defaultValue: "LEFT",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "HINGE_SIDE"
                                ]
                            },
                            variables: [
                                {
                                    name: "Hinge_Side_nbr",
                                    path: "$data.hinge_side_nbr",
                                    type: "text"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_MODULE",
                                                    comparison: "=",
                                                    value: "9"
                                                },
                                                {
                                                    field: "ZL_DOOR_TYPE_09",
                                                    comparison: "=",
                                                    value: "SINGLE"
                                                },
                                                {
                                                    field: "ZL_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1158,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_HINGE_SIDE_10",
                            label: "Opening side",
                            directImpact: true,
                            defaultValue: "LEFT",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "HINGE_SIDE"
                                ]
                            },
                            variables: [
                                {
                                    name: "Hinge_Side_nbr",
                                    path: "$data.hinge_side_nbr",
                                    type: "text"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_MODULE",
                                                    comparison: "=",
                                                    value: "10"
                                                },
                                                {
                                                    field: "ZL_DOOR_TYPE_10",
                                                    comparison: "=",
                                                    value: "SINGLE"
                                                },
                                                {
                                                    field: "ZL_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1159,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_HINGE_SIDE_11",
                            label: "Opening side",
                            directImpact: true,
                            defaultValue: "LEFT",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "HINGE_SIDE"
                                ]
                            },
                            variables: [
                                {
                                    name: "Hinge_Side_nbr",
                                    path: "$data.hinge_side_nbr",
                                    type: "text"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_MODULE",
                                                    comparison: "=",
                                                    value: "11"
                                                },
                                                {
                                                    field: "ZL_DOOR_TYPE_11",
                                                    comparison: "=",
                                                    value: "SINGLE"
                                                },
                                                {
                                                    field: "ZL_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1160,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_HINGE_SIDE_12",
                            label: "Opening side",
                            directImpact: true,
                            defaultValue: "LEFT",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "HINGE_SIDE"
                                ]
                            },
                            variables: [
                                {
                                    name: "Hinge_Side_nbr",
                                    path: "$data.hinge_side_nbr",
                                    type: "text"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_MODULE",
                                                    comparison: "=",
                                                    value: "12"
                                                },
                                                {
                                                    field: "ZL_DOOR_TYPE_12",
                                                    comparison: "=",
                                                    value: "SINGLE"
                                                },
                                                {
                                                    field: "ZL_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1161,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_HINGE_SIDE_13",
                            label: "Opening side",
                            directImpact: true,
                            defaultValue: "LEFT",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "HINGE_SIDE"
                                ]
                            },
                            variables: [
                                {
                                    name: "Hinge_Side_nbr",
                                    path: "$data.hinge_side_nbr",
                                    type: "text"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_MODULE",
                                                    comparison: "=",
                                                    value: "13"
                                                },
                                                {
                                                    field: "ZL_DOOR_TYPE_13",
                                                    comparison: "=",
                                                    value: "SINGLE"
                                                },
                                                {
                                                    field: "ZL_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1162,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZL_HINGE_SIDE_14",
                            label: "Opening side",
                            directImpact: true,
                            defaultValue: "LEFT",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "HINGE_SIDE"
                                ]
                            },
                            variables: [
                                {
                                    name: "Hinge_Side_nbr",
                                    path: "$data.hinge_side_nbr",
                                    type: "text"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZL_MODULE",
                                                    comparison: "=",
                                                    value: "14"
                                                },
                                                {
                                                    field: "ZL_DOOR_TYPE_14",
                                                    comparison: "=",
                                                    value: "SINGLE"
                                                },
                                                {
                                                    field: "ZL_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 14,
            type: "TAB",
            render: "SECTION",
            name: "right",
            label: "Right",
            goToZone: "0.0.1.1.1",
            children: [
                {
                    id: 111,
                    type: "NONE",
                    render: "SECTION",
                    name: "form",
                    label: "Form",
                    children: [
                        {
                            id: 1113,
                            type: "INPUT",
                            render: "FIELD",
                            name: "ZR_WIDTH",
                            label: "Width",
                            defaultValue: 3200,
                            props: {
                                min: 400,
                                max: 6000,
                                type: "SLIDER"
                            },
                            variables: [
                                {
                                    name: "ZR_W",
                                    path: ".",
                                    type: "num"
                                }
                            ]
                        },
                        {
                            id: 1114,
                            type: "INPUT",
                            render: "FIELD",
                            name: "ZR_DEPTH",
                            label: "Depth",
                            defaultValue: 500,
                            props: {
                                min: 350,
                                max: 800,
                                type: "SLIDER"
                            },
                            variables: [
                                {
                                    name: "ZR_D",
                                    path: ".",
                                    type: "num"
                                }
                            ]
                        },
                        {
                            id: 1115,
                            type: "INPUT",
                            render: "FIELD",
                            name: "ZR_CNT",
                            label: "Number of articles",
                            defaultValue: 8,
                            props: {
                                min: "&round($ZR_WIDTH/500)",
                                max: "&round($ZR_WIDTH/400)",
                                type: "SLIDER"
                            },
                            variables: [
                                {
                                    name: "ZR_CNT",
                                    type: "num",
                                    path: "."
                                }
                            ]
                        },
                        {
                            id: 1116,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_DRAWER_TYPE",
                            label: "Drawer type",
                            autofill: [
                                "ZR_ARTICLE_SELECT"
                            ],
                            defaultValue: "INTERIOR",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "DRAWER_TYPE_ITEMS"
                                ]
                            }
                        }
                    ]
                },
                {
                    id: 112,
                    type: "NONE",
                    render: "SECTION",
                    name: "styler",
                    label: "Styler",
                    children: [
                        {
                            id: 1121,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_DESIGN_STYLE",
                            label: "Design style",
                            defaultValue: "STYLE_01",
                            props: {
                                type: "BUTTON",
                                image: true,
                                options: [
                                    "DESIGN_STYLE_ITEMS"
                                ]
                            }
                        },
                        {
                            id: 1122,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_FRONT_TYPE",
                            label: "Front",
                            defaultValue: "FRONT_01",
                            props: {
                                type: "BUTTON",
                                image: true,
                                options: [
                                    "FRONT_TYPE_ITEMS"
                                ]
                            },
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_DESIGN_STYLE",
                                                    comparaison: "=",
                                                    value: "$data.style"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            variables: [
                                {
                                    name: "Door_Name",
                                    path: "$data.door_type",
                                    type: "None"
                                }
                            ]
                        },
                        {
                            id: 1123,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_FINISH_EXT",
                            label: "Exterior",
                            defaultValue: "STYLE_01_FRONT_01_UN_EV_HGS_MDF_0H913_V2A_12_NO_SURF_NO_SURF",
                            props: {
                                image: true,
                                type: "CIRCLE",
                                options: [
                                    "FINISH_EXT_ITEMS"
                                ]
                            },
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_FRONT_TYPE",
                                                    comparaison: "=",
                                                    value: "$data.front"
                                                },
                                                {
                                                    field: "ZR_DESIGN_STYLE",
                                                    comparaison: "=",
                                                    value: "$data.style"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            variables: [
                                {
                                    name: "MAT_FR_1",
                                    path: "$data.material",
                                    type: "mat"
                                },
                                {
                                    name: "MAT_FR_1_THK",
                                    path: "$data.mat_fr_thk",
                                    type: "num"
                                },
                                {
                                    name: "SRF_FR_1_TOP",
                                    path: "$data.surface_top",
                                    type: "surf"
                                },
                                {
                                    name: "SRF_FR_1_BOT",
                                    path: "$data.surface_bot",
                                    type: "surf"
                                },
                                {
                                    name: "SRF_FR_1_THK",
                                    path: "$data.srf_fr_thk",
                                    type: "num"
                                },
                                {
                                    name: "PRF_FR_1",
                                    path: "$data.profile",
                                    type: "none"
                                },
                                {
                                    name: "FI_1_THK",
                                    path: "$data.filler_thk",
                                    type: "num"
                                }
                            ]
                        },
                        {
                            id: 1124,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_FINISH_INT",
                            label: "Interior",
                            defaultValue: "STYLE_01_1_UN_0H397_BST",
                            props: {
                                image: true,
                                type: "CIRCLE",
                                options: [
                                    "FINISH_INT_ITEMS"
                                ]
                            },
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_DESIGN_STYLE",
                                                    comparaison: "=",
                                                    value: "$data.style"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            variables: [
                                {
                                    name: "MAT_1",
                                    path: "$data.material",
                                    type: "mat"
                                },
                                {
                                    name: "MAT_1_THK",
                                    path: "$data.mat_thk",
                                    type: "num"
                                },
                                {
                                    name: "MAT_DSI_1",
                                    path: "$data.drawer_material",
                                    type: "mat"
                                },
                                {
                                    name: "MAT_DBK_1",
                                    path: "$data.drawer_material",
                                    type: "mat"
                                },
                                {
                                    name: "SRF_1_TOP",
                                    path: "$data.surface_top",
                                    type: "surf"
                                },
                                {
                                    name: "SRF_1_BOT",
                                    path: "$data.surface_bot",
                                    type: "surf"
                                },
                                {
                                    name: "SRF_1_THK",
                                    path: "$data.srf_thk",
                                    type: "num"
                                },
                                {
                                    name: "PRF_1",
                                    path: "$data.profile",
                                    type: "none"
                                }
                            ]
                        },
                        {
                            id: 1125,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_PULL_TYPE",
                            label: "Pull",
                            props: {
                                image: true,
                                type: "BUTTON",
                                options: [
                                    "PULL_ITEMS"
                                ]
                            },
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "OR",
                                            roles: [
                                                {
                                                    field: "ZR_DESIGN_STYLE",
                                                    comparaison: "=",
                                                    value: "$data.style"
                                                },
                                                {
                                                    field: "ZR_PULL_TYPE",
                                                    comparaison: "=",
                                                    value: "TIPON"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            variables: [
                                {
                                    name: "Handle_Type",
                                    path: "$data.handle_type",
                                    type: "none"
                                },
                                {
                                    name: "HINGE_OPTION",
                                    path: "$data.hinge_option",
                                    type: "none"
                                },
                                {
                                    name: "DR_EXT_SLIDE_TYPE_01",
                                    path: "$data.drawer_slide_type",
                                    type: "none"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "OR",
                                            roles: [
                                                {
                                                    field: "ZR_FRONT_TYPE.data.have_pull",
                                                    comparison: "=",
                                                    value: "Yes"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 113,
                    type: "NONE",
                    render: "SECTION",
                    name: "function",
                    label: "Function",
                    children: [
                        {
                            id: 1131,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_MODULE",
                            label: "Column",
                            defaultValue: "1",
                            props: {
                                type: "COLUMN",
                                options: [
                                    "ZR_COLUMN_LIST"
                                ]
                            },
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "OR",
                                            roles: [
                                                {
                                                    field: "ZR_CNT",
                                                    comparaison: ">=",
                                                    value: "$data.nbrCount"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1132,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_ARTICLE_SELECT",
                            label: "Select Article",
                            defaultValue: "",
                            props: {
                                type: "BUTTON",
                                image: true,
                                options: [
                                    "ARTICLE_ITEMS"
                                ]
                            },
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_DRAWER_TYPE",
                                                    comparaison: "IN",
                                                    value: "$data.drawer_type"
                                                },
                                                {
                                                    field: "&($ZR_MODULE==1)?'ZR_DOOR_TYPE_01':&($ZR_MODULE==2)?'ZR_DOOR_TYPE_02':&($ZR_MODULE==3)?'ZR_DOOR_TYPE_03':&($ZR_MODULE==4)?'ZR_DOOR_TYPE_04':&($ZR_MODULE==5)?'ZR_DOOR_TYPE_05':&($ZR_MODULE==6)?'ZR_DOOR_TYPE_06':&($ZR_MODULE==7)?'ZR_DOOR_TYPE_07':&($ZR_MODULE==8)?'ZR_DOOR_TYPE_08':&($ZR_MODULE==9)?'ZR_DOOR_TYPE_09':&($ZR_MODULE==10)?'ZR_DOOR_TYPE_10':&($ZR_MODULE==11)?'ZR_DOOR_TYPE_11':&($ZR_MODULE==12)?'ZR_DOOR_TYPE_12':&($ZR_MODULE==13)?'ZR_DOOR_TYPE_13':&($ZR_MODULE==14)?'ZR_DOOR_TYPE_14':'ZR_DOOR_TYPE_15'",
                                                    comparaison: "=",
                                                    value: "$data.door_type"
                                                },
                                                {
                                                    operator: "OR",
                                                    roles: [
                                                        {
                                                            operator: "AND",
                                                            roles: [
                                                                {
                                                                    field: "ZR_HAS_DRAWER",
                                                                    comparaison: "=",
                                                                    value: "$data.drawer"
                                                                },
                                                                {
                                                                    field: "ZR_HAS_HANGER",
                                                                    comparaison: "=",
                                                                    value: "$data.hanger"
                                                                },
                                                                {
                                                                    field: "ZR_ARTICLE_SELECT.data.article_type",
                                                                    comparaison: "C",
                                                                    value: "SHAPE_LAYOUT_RIGHT.data.article_type"
                                                                },
                                                                {
                                                                    field: "&($IS_RL_N * ZR_MODULE == 1 ? 1 : 0)",
                                                                    comparaison: "=",
                                                                    value: "$data.is_extreme"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            operator: "AND",
                                                            roles: [
                                                                {
                                                                    field: "ZR_HAS_HANGER",
                                                                    comparaison: "=",
                                                                    value: false
                                                                },
                                                                {
                                                                    field: "ZR_HAS_DRAWER",
                                                                    comparaison: "=",
                                                                    value: false
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            variables: [
                                {
                                    name: "WACA_WIDTH",
                                    path: "$data.door_width",
                                    type: "num"
                                },
                                {
                                    name: "SIZE_X",
                                    path: "$data.sizex",
                                    type: "num"
                                }
                            ]
                        },
                        {
                            id: 1134,
                            type: "ROW",
                            name: "filters_section",
                            label: "Filters",
                            render: "SECTION",
                            children: [
                                {
                                    id: 11341,
                                    render: "FIELD",
                                    type: "CHECKBOX",
                                    label: "Has hanger",
                                    name: "ZR_HAS_HANGER",
                                    defaultValue: true
                                },
                                {
                                    id: 11342,
                                    render: "FIELD",
                                    type: "CHECKBOX",
                                    label: "Has Drawer",
                                    name: "ZR_HAS_DRAWER",
                                    defaultValue: true,
                                    dependencies: [
                                        {
                                            nod: 1,
                                            action: "SHOW",
                                            roles: [
                                                {
                                                    operator: "OR",
                                                    roles: [
                                                        {
                                                            field: "ZR_ARTICLE_SELECT.data.article_type",
                                                            comparison: "=",
                                                            value: "MD_CL_CR",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                }
                            ]
                        },
                        {
                            id: 1135,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_DOOR_TYPE_01",
                            label: "Door type",
                            autofill: [
                                "ZR_ARTICLE_SELECT"
                            ],
                            defaultValue: "SINGLE",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "ZR_SINGLEDOUBLE_01"
                                ]
                            },
                            variables: [
                                {
                                    name: "ZR_CNT_01",
                                    path: "$data.count",
                                    type: "num"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_MODULE",
                                                    comparison: "=",
                                                    value: "1"
                                                },
                                                {
                                                    field: "ZR_WIDTH",
                                                    comparison: ">",
                                                    value: "ZR_MODULE.data.accumulated_width"
                                                },
                                                {
                                                    field: "ZR_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ],
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_WIDTH",
                                                    comparaison: ">=",
                                                    value: "$data.accumulated_width"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1136,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_DOOR_TYPE_02",
                            label: "Door type",
                            autofill: [
                                "ZR_ARTICLE_SELECT"
                            ],
                            defaultValue: "DOUBLE",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "ZR_SINGLEDOUBLE_02"
                                ]
                            },
                            variables: [
                                {
                                    name: "ZR_CNT_02",
                                    path: "$data.count",
                                    type: "num"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_MODULE",
                                                    comparison: "=",
                                                    value: "2"
                                                },
                                                {
                                                    field: "ZR_WIDTH",
                                                    comparison: ">=",
                                                    value: "ZR_MODULE.data.accumulated_width"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_WIDTH",
                                                    comparaison: ">=",
                                                    value: "$data.accumulated_width"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1137,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_DOOR_TYPE_03",
                            label: "Door type",
                            autofill: [
                                "ZR_ARTICLE_SELECT"
                            ],
                            defaultValue: "DOUBLE",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "ZR_SINGLEDOUBLE_03"
                                ]
                            },
                            variables: [
                                {
                                    name: "ZR_CNT_03",
                                    path: "$data.count",
                                    type: "num"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_MODULE",
                                                    comparison: "=",
                                                    value: "3"
                                                },
                                                {
                                                    field: "ZR_WIDTH",
                                                    comparison: ">",
                                                    value: "ZR_MODULE.data.accumulated_width"
                                                },
                                                {
                                                    field: "ZR_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ],
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_WIDTH",
                                                    comparaison: ">=",
                                                    value: "$data.accumulated_width"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1138,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_DOOR_TYPE_04",
                            label: "Door type",
                            autofill: [
                                "ZR_ARTICLE_SELECT"
                            ],
                            defaultValue: "DOUBLE",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "ZR_SINGLEDOUBLE_04"
                                ]
                            },
                            variables: [
                                {
                                    name: "ZR_CNT_04",
                                    path: "$data.count",
                                    type: "num"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_MODULE",
                                                    comparison: "=",
                                                    value: "4"
                                                },
                                                {
                                                    field: "ZR_WIDTH",
                                                    comparison: ">",
                                                    value: "ZR_MODULE.data.accumulated_width"
                                                },
                                                {
                                                    field: "ZR_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ],
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_WIDTH",
                                                    comparaison: ">=",
                                                    value: "$data.accumulated_width"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1139,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_DOOR_TYPE_05",
                            label: "Door type",
                            autofill: [
                                "ZR_ARTICLE_SELECT"
                            ],
                            defaultValue: "DOUBLE",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "ZR_SINGLEDOUBLE_05"
                                ]
                            },
                            variables: [
                                {
                                    name: "ZR_CNT_05",
                                    path: "$data.count",
                                    type: "num"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_MODULE",
                                                    comparison: "=",
                                                    value: "5"
                                                },
                                                {
                                                    field: "ZR_WIDTH",
                                                    comparison: ">",
                                                    value: "ZR_MODULE.data.accumulated_width"
                                                },
                                                {
                                                    field: "ZR_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ],
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_WIDTH",
                                                    comparaison: ">=",
                                                    value: "$data.accumulated_width"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1140,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_DOOR_TYPE_06",
                            label: "Door type",
                            autofill: [
                                "ZR_ARTICLE_SELECT"
                            ],
                            defaultValue: "DOUBLE",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "ZR_SINGLEDOUBLE_06"
                                ]
                            },
                            variables: [
                                {
                                    name: "ZR_CNT_06",
                                    path: "$data.count",
                                    type: "num"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_MODULE",
                                                    comparison: "=",
                                                    value: "6"
                                                },
                                                {
                                                    field: "ZR_WIDTH",
                                                    comparison: ">",
                                                    value: "ZR_MODULE.data.accumulated_width"
                                                },
                                                {
                                                    field: "ZR_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ],
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_WIDTH",
                                                    comparaison: ">=",
                                                    value: "$data.accumulated_width"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1141,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_DOOR_TYPE_07",
                            label: "Door type",
                            autofill: [
                                "ZR_ARTICLE_SELECT"
                            ],
                            defaultValue: "DOUBLE",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "ZR_SINGLEDOUBLE_07"
                                ]
                            },
                            variables: [
                                {
                                    name: "ZR_CNT_07",
                                    path: "$data.count",
                                    type: "num"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_MODULE",
                                                    comparison: "=",
                                                    value: "7"
                                                },
                                                {
                                                    field: "ZR_WIDTH",
                                                    comparison: ">",
                                                    value: "ZR_MODULE.data.accumulated_width"
                                                },
                                                {
                                                    field: "ZR_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ],
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_WIDTH",
                                                    comparaison: ">=",
                                                    value: "$data.accumulated_width"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1142,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_DOOR_TYPE_08",
                            label: "Door type",
                            autofill: [
                                "ZR_ARTICLE_SELECT"
                            ],
                            defaultValue: "SINGLE",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "ZR_SINGLEDOUBLE_08"
                                ]
                            },
                            variables: [
                                {
                                    name: "ZR_CNT_08",
                                    path: "$data.count",
                                    type: "num"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_MODULE",
                                                    comparison: "=",
                                                    value: "8"
                                                },
                                                {
                                                    field: "ZR_WIDTH",
                                                    comparison: ">",
                                                    value: "ZR_MODULE.data.accumulated_width"
                                                },
                                                {
                                                    field: "ZR_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ],
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_WIDTH",
                                                    comparaison: ">=",
                                                    value: "$data.accumulated_width"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1143,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_DOOR_TYPE_09",
                            label: "Door type",
                            autofill: [
                                "ZR_ARTICLE_SELECT"
                            ],
                            defaultValue: "DOUBLE",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "ZR_SINGLEDOUBLE_09"
                                ]
                            },
                            variables: [
                                {
                                    name: "ZR_CNT_09",
                                    path: "$data.count",
                                    type: "num"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_MODULE",
                                                    comparison: "=",
                                                    value: "9"
                                                },
                                                {
                                                    field: "ZR_WIDTH",
                                                    comparison: ">",
                                                    value: "ZR_MODULE.data.accumulated_width"
                                                },
                                                {
                                                    field: "ZR_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ],
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_WIDTH",
                                                    comparaison: ">=",
                                                    value: "$data.accumulated_width"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1144,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_DOOR_TYPE_10",
                            label: "Door type",
                            autofill: [
                                "ZR_ARTICLE_SELECT"
                            ],
                            defaultValue: "DOUBLE",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "ZR_SINGLEDOUBLE_10"
                                ]
                            },
                            variables: [
                                {
                                    name: "ZR_CNT_10",
                                    path: "$data.count",
                                    type: "num"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_MODULE",
                                                    comparison: "=",
                                                    value: "10"
                                                },
                                                {
                                                    field: "ZR_WIDTH",
                                                    comparison: ">",
                                                    value: "ZR_MODULE.data.accumulated_width"
                                                },
                                                {
                                                    field: "ZR_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ],
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_WIDTH",
                                                    comparaison: ">=",
                                                    value: "$data.accumulated_width"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1145,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_DOOR_TYPE_11",
                            label: "Door type",
                            autofill: [
                                "ZR_ARTICLE_SELECT"
                            ],
                            defaultValue: "DOUBLE",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "ZR_SINGLEDOUBLE_11"
                                ]
                            },
                            variables: [
                                {
                                    name: "ZR_CNT_11",
                                    path: "$data.count",
                                    type: "num"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_MODULE",
                                                    comparison: "=",
                                                    value: "11"
                                                },
                                                {
                                                    field: "ZR_WIDTH",
                                                    comparison: ">",
                                                    value: "ZR_MODULE.data.accumulated_width"
                                                },
                                                {
                                                    field: "ZR_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ],
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_WIDTH",
                                                    comparaison: ">=",
                                                    value: "$data.accumulated_width"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1146,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_DOOR_TYPE_12",
                            label: "Door type",
                            autofill: [
                                "ZR_ARTICLE_SELECT"
                            ],
                            defaultValue: "DOUBLE",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "ZR_SINGLEDOUBLE_12"
                                ]
                            },
                            variables: [
                                {
                                    name: "ZR_CNT_12",
                                    path: "$data.count",
                                    type: "num"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_MODULE",
                                                    comparison: "=",
                                                    value: "12"
                                                },
                                                {
                                                    field: "ZR_WIDTH",
                                                    comparison: ">",
                                                    value: "ZR_MODULE.data.accumulated_width"
                                                },
                                                {
                                                    field: "ZR_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ],
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_WIDTH",
                                                    comparaison: ">=",
                                                    value: "$data.accumulated_width"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1147,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_DOOR_TYPE_13",
                            label: "Door type",
                            autofill: [
                                "ZR_ARTICLE_SELECT"
                            ],
                            defaultValue: "DOUBLE",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "ZR_SINGLEDOUBLE_13"
                                ]
                            },
                            variables: [
                                {
                                    name: "ZR_CNT_13",
                                    path: "$data.count",
                                    type: "num"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_MODULE",
                                                    comparison: "=",
                                                    value: "13"
                                                },
                                                {
                                                    field: "ZR_WIDTH",
                                                    comparison: ">",
                                                    value: "ZR_MODULE.data.accumulated_width"
                                                },
                                                {
                                                    field: "ZR_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ],
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_WIDTH",
                                                    comparaison: ">=",
                                                    value: "$data.accumulated_width"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1148,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_DOOR_TYPE_14",
                            label: "Door type",
                            autofill: [
                                "ZR_ARTICLE_SELECT"
                            ],
                            defaultValue: "DOUBLE",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "ZR_SINGLEDOUBLE_14"
                                ]
                            },
                            variables: [
                                {
                                    name: "ZR_CNT_14",
                                    path: "data.count",
                                    type: "num"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_MODULE",
                                                    comparison: "=",
                                                    value: "14"
                                                },
                                                {
                                                    field: "ZR_WIDTH",
                                                    comparison: ">",
                                                    value: "ZR_MODULE.data.accumulated_width"
                                                },
                                                {
                                                    field: "ZR_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ],
                            filters: [
                                {
                                    nod: 1,
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_WIDTH",
                                                    comparaison: ">=",
                                                    value: "$data.accumulated_width"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1149,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_HINGE_SIDE_01",
                            label: "Opening side",
                            directImpact: true,
                            defaultValue: "LEFT",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "HINGE_SIDE"
                                ]
                            },
                            variables: [
                                {
                                    name: "Hinge_Side_nbr",
                                    path: "$data.hinge_side_nbr",
                                    type: "text"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_MODULE",
                                                    comparison: "=",
                                                    value: "1"
                                                },
                                                {
                                                    field: "ZR_DOOR_TYPE_01",
                                                    comparison: "=",
                                                    value: "SINGLE"
                                                },
                                                {
                                                    field: "ZR_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1150,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_HINGE_SIDE_02",
                            label: "Opening side",
                            directImpact: true,
                            defaultValue: "LEFT",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "HINGE_SIDE"
                                ]
                            },
                            variables: [
                                {
                                    name: "Hinge_Side_nbr",
                                    path: "$data.hinge_side_nbr",
                                    type: "text"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_MODULE",
                                                    comparison: "=",
                                                    value: "2"
                                                },
                                                {
                                                    field: "ZR_DOOR_TYPE_02",
                                                    comparison: "=",
                                                    value: "SINGLE"
                                                },
                                                {
                                                    field: "ZR_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1151,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_HINGE_SIDE_03",
                            label: "Opening side",
                            directImpact: true,
                            defaultValue: "LEFT",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "HINGE_SIDE"
                                ]
                            },
                            variables: [
                                {
                                    name: "Hinge_Side_nbr",
                                    path: "$data.hinge_side_nbr",
                                    type: "text"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_MODULE",
                                                    comparison: "=",
                                                    value: "3"
                                                },
                                                {
                                                    field: "ZR_DOOR_TYPE_03",
                                                    comparison: "=",
                                                    value: "SINGLE"
                                                },
                                                {
                                                    field: "ZR_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1152,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_HINGE_SIDE_04",
                            label: "Opening side",
                            directImpact: true,
                            defaultValue: "LEFT",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "HINGE_SIDE"
                                ]
                            },
                            variables: [
                                {
                                    name: "Hinge_Side_nbr",
                                    path: "$data.hinge_side_nbr",
                                    type: "text"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_MODULE",
                                                    comparison: "=",
                                                    value: "4"
                                                },
                                                {
                                                    field: "ZR_DOOR_TYPE_04",
                                                    comparison: "=",
                                                    value: "SINGLE"
                                                },
                                                {
                                                    field: "ZR_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1153,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_HINGE_SIDE_05",
                            label: "Opening side",
                            directImpact: true,
                            defaultValue: "LEFT",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "HINGE_SIDE"
                                ]
                            },
                            variables: [
                                {
                                    name: "Hinge_Side_nbr",
                                    path: "$data.hinge_side_nbr",
                                    type: "text"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_MODULE",
                                                    comparison: "=",
                                                    value: "5"
                                                },
                                                {
                                                    field: "ZR_DOOR_TYPE_05",
                                                    comparison: "=",
                                                    value: "SINGLE"
                                                },
                                                {
                                                    field: "ZR_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1154,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_HINGE_SIDE_06",
                            label: "Opening side",
                            directImpact: true,
                            defaultValue: "LEFT",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "HINGE_SIDE"
                                ]
                            },
                            variables: [
                                {
                                    name: "Hinge_Side_nbr",
                                    path: "$data.hinge_side_nbr",
                                    type: "text"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_MODULE",
                                                    comparison: "=",
                                                    value: "6"
                                                },
                                                {
                                                    field: "ZR_DOOR_TYPE_06",
                                                    comparison: "=",
                                                    value: "SINGLE"
                                                },
                                                {
                                                    field: "ZR_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },

                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1155,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_HINGE_SIDE_07",
                            label: "Opening side",
                            directImpact: true,
                            defaultValue: "LEFT",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "HINGE_SIDE"
                                ]
                            },
                            variables: [
                                {
                                    name: "Hinge_Side_nbr",
                                    path: "$data.hinge_side_nbr",
                                    type: "text"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_MODULE",
                                                    comparison: "=",
                                                    value: "7"
                                                },
                                                {
                                                    field: "ZR_DOOR_TYPE_07",
                                                    comparison: "=",
                                                    value: "SINGLE"
                                                },
                                                {
                                                    field: "ZR_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1156,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_HINGE_SIDE_08",
                            label: "Opening side",
                            directImpact: true,
                            defaultValue: "LEFT",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "HINGE_SIDE"
                                ]
                            },
                            variables: [
                                {
                                    name: "Hinge_Side_nbr",
                                    path: "$data.hinge_side_nbr",
                                    type: "text"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_MODULE",
                                                    comparison: "=",
                                                    value: "8"
                                                },
                                                {
                                                    field: "ZR_DOOR_TYPE_08",
                                                    comparison: "=",
                                                    value: "SINGLE"
                                                },
                                                {
                                                    field: "ZR_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1157,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_HINGE_SIDE_09",
                            label: "Opening side",
                            directImpact: true,
                            defaultValue: "LEFT",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "HINGE_SIDE"
                                ]
                            },
                            variables: [
                                {
                                    name: "Hinge_Side_nbr",
                                    path: "$data.hinge_side_nbr",
                                    type: "text"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_MODULE",
                                                    comparison: "=",
                                                    value: "9"
                                                },
                                                {
                                                    field: "ZR_DOOR_TYPE_09",
                                                    comparison: "=",
                                                    value: "SINGLE"
                                                },
                                                {
                                                    field: "ZR_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1158,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_HINGE_SIDE_10",
                            label: "Opening side",
                            directImpact: true,
                            defaultValue: "LEFT",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "HINGE_SIDE"
                                ]
                            },
                            variables: [
                                {
                                    name: "Hinge_Side_nbr",
                                    path: "$data.hinge_side_nbr",
                                    type: "text"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_MODULE",
                                                    comparison: "=",
                                                    value: "10"
                                                },
                                                {
                                                    field: "ZR_DOOR_TYPE_10",
                                                    comparison: "=",
                                                    value: "SINGLE"
                                                },
                                                {
                                                    field: "ZR_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1159,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_HINGE_SIDE_11",
                            label: "Opening side",
                            directImpact: true,
                            defaultValue: "LEFT",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "HINGE_SIDE"
                                ]
                            },
                            variables: [
                                {
                                    name: "Hinge_Side_nbr",
                                    path: "$data.hinge_side_nbr",
                                    type: "text"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_MODULE",
                                                    comparison: "=",
                                                    value: "11"
                                                },
                                                {
                                                    field: "ZR_DOOR_TYPE_11",
                                                    comparison: "=",
                                                    value: "SINGLE"
                                                },
                                                {
                                                    field: "ZR_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1160,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_HINGE_SIDE_12",
                            label: "Opening side",
                            directImpact: true,
                            defaultValue: "LEFT",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "HINGE_SIDE"
                                ]
                            },
                            variables: [
                                {
                                    name: "Hinge_Side_nbr",
                                    path: "$data.hinge_side_nbr",
                                    type: "text"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_MODULE",
                                                    comparison: "=",
                                                    value: "12"
                                                },
                                                {
                                                    field: "ZR_DOOR_TYPE_12",
                                                    comparison: "=",
                                                    value: "SINGLE"
                                                },
                                                {
                                                    field: "ZR_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1161,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_HINGE_SIDE_13",
                            label: "Opening side",
                            directImpact: true,
                            defaultValue: "LEFT",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "HINGE_SIDE"
                                ]
                            },
                            variables: [
                                {
                                    name: "Hinge_Side_nbr",
                                    path: "$data.hinge_side_nbr",
                                    type: "text"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_MODULE",
                                                    comparison: "=",
                                                    value: "13"
                                                },
                                                {
                                                    field: "ZR_DOOR_TYPE_13",
                                                    comparison: "=",
                                                    value: "SINGLE"
                                                },
                                                {
                                                    field: "ZR_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1162,
                            type: "COMBO",
                            render: "FIELD",
                            name: "ZR_HINGE_SIDE_14",
                            label: "Opening side",
                            directImpact: true,
                            defaultValue: "LEFT",
                            props: {
                                type: "SWITCH",
                                options: [
                                    "HINGE_SIDE"
                                ]
                            },
                            variables: [
                                {
                                    name: "Hinge_Side_nbr",
                                    path: "$data.hinge_side_nbr",
                                    type: "text"
                                }
                            ],
                            dependencies: [
                                {
                                    nod: 1,
                                    action: "SHOW",
                                    roles: [
                                        {
                                            operator: "AND",
                                            roles: [
                                                {
                                                    field: "ZR_MODULE",
                                                    comparison: "=",
                                                    value: "14"
                                                },
                                                {
                                                    field: "ZR_DOOR_TYPE_14",
                                                    comparison: "=",
                                                    value: "SINGLE"
                                                },
                                                {
                                                    field: "ZR_ARTICLE_SELECT.data.article_type",
                                                    comparison: "=",
                                                    value: "MD_CL_CR",
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};