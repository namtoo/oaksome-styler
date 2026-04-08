import { FormConfig } from "../types/form";
import { ShapeConfig } from "../types/zoning";

const zoning: ShapeConfig = {
  name: "OAKSOME_SHAPE_U_TEST_V1",
  width: "($ZM_W + $ZL_D + $ZR_D) mm mm",
  depth: "$ZONE_D mm mm",
  height: "($ZONE_H) mm mm",
  cps: {
    CP_1_FI_10S0: {
      mat: "$MAT_FI_1",
      surf: "$SRF_FI_1_TOP",
    },
    CP_1_TSI_1000_C1: {
      mat: "$MAT_TS_1",
      surf: "$SRF_TS_1_EXT",
    },
    CP_1_FI_S010: {
      mat: "$MAT_FI_1",
      surf: "$SRF_FI_1_TOP",
    },
    CP_1_BA_1000: {
      mat: "$MAT_BA_1",
      surf: "$SRF_BA_1_TOP",
    },
    CP_1_CM_0000: {
      mat: "$MAT_CM_1",
      surf: "$SRF_CM_1_TOP",
    },
    WACAC_SDR_3IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACAC_SDR_IAS_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    CP_1_FI_1000: {
      mat: "$MAT_FI_1",
      surf: "$SRF_FI_1_TOP",
    },
    WACAC_SDR_IHC_2IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    CP_1_FI_1111: {
      mat: "$MAT_FI_1",
      surf: "$SRF_FI_1_TOP",
    },
    WACAC_SDR_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACAC_SDR_IOP_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACAC_SDR_2IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACAC_SDL_IOP_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACAC_SDL_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACAC_SDL_IHC_2IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACAC_SDL_IAS_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACAC_SDL_3IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACAC_SDL_2IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_SD_3IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_DD_3IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_SD_2DR1_DR2_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_DD_2DR1_DR2_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_SD_2DR2_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_DD_2DR2_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_SD_2IDR_2IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_DD_2IDR_2IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_SD_2IDR_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_DD_2IDR_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_SD_2IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_DD_2IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_SD_3IDR_2IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_DD_3IDR_2IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_SD_3IDR_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_DD_3IDR_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_SD_4DR1_2IDR_2IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_DD_4DR1_2IDR_2IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_DD_4DR1_IDR_2IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_SD_4DR1_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_DD_4DR1_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_SD_4IDR_2IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_DD_4IDR_2IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_SD_5IDR_2IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_DD_5IDR_2IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_SD_5IDR_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_DD_5IDR_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_SD_6IDR_2IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_DD_6IDR_2IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_SD_6IDR_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_DD_6IDR_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_SD_DR1_DR2_DR1_2IDR_2IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_DD_DR1_DR2_DR1_2IDR_2IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_SD_DR1_DR2_DR1_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_DD_DR1_DR2_DR1_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_SD_DR1_DR3_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_DD_DR1_DR3_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_SD_DR2_2xDR1_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_DD_DR2_2xDR1_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_SD_DR3_DR1_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_DD_DR3_DR1_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_SD_IAS_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_DD_IAS_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_SD_IDR_2IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_DD_IDR_2IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_SD_IDR_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_DD_IDR_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_SD_IHC_2IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_DD_IHC_2IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_SD_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_DD_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_SD_IOP_4IDR_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_DD_IOP_4IDR_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_SD_IOP_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
    WACA_DD_IOP_IHC_IAS: {
      mat: "NO_MAT",
      surf: "NO_SURF",
    },
  },
  variables: {
    ZM_W: "6000",
    ZL_D: "500",
    ZR_D: "500",
    ZONE_D: "8000",
    ZONE_H: "3000",
    ZM_D: "500",
    IS_ML_N: "1",
    IS_ML_P: "0",
    BASE_HEIGHT: "100",
    CROWN_HEIGHT: "100",
    ZM_STEP: "($ZMA_W/$ZM_CNT)",
    ZL_W: "6000",
    Front_Side_GAP: "2.5",
    ZR_W: "7000",
    IS_LL_P: "1",
    ZMA_W: "($ZM_W -50 - 50)",
    IS_RL_N: "0",
    IS_BI_L: "1",
    ZM_CNT: "10",
    IS_BI_R: "0",
    MAT_FI_1_THK: "$MAT_FR_1_THK",
    MAT_FR_1_THK: "16",
    FI_1_THK: "($MAT_FI_1_THK + 2*($SRF_FI_1_THK))",
    ZL_STEP: "($ZLA_W / $ZL_CNT)",
    ZFL_W: "50",
    SRF_FI_1_THK: "$SRF_FR_1_THK",
    ZLA_W: "($ZL_W - ($FI_1_THK *(1-$IS_BI_L)) - ($IS_BI_L*$ZFL_W) - 50)",
    SRF_FR_1_THK: "0.8",
    ZM_CNT_01: "1",
    ZL_CNT: "10",
    DS_WACA_ZM_ART_01: "#DS_WACA_U_ART_01",
    DS_WACA_ZM_ART_99: "#DS_WACA_U_ART_01",
    ZR_STEP: "($ZRA_W / $ZR_CNT)",
    ZFR_W: "50",
    ZRA_W: "($ZR_W - ($FI_1_THK *(1-$IS_BI_R)) - ($IS_BI_R*$ZFR_W) - 50)",
    ZL_CNT_01: "1",
    ZR_CNT: "9",
    ZL_CNT_ACC_02: "($ZL_CNT_ACC_01 + $ZL_CNT_02)",
    ZM_CNT_ACC_02: "($ZM_CNT_ACC_01 + $ZM_CNT_02)",
    MAT_FI_1: "$MAT_FR_1",
    ZL_CNT_ACC_01: "$ZL_CNT_01",
    ZM_CNT_ACC_01: "$ZM_CNT_01",
    MAT_TS_1: "$MAT_1",
    MAT_FR_1: "EG_W980_ST2_HP_MDF_18mm",
    SRF_FI_1_TOP: "$SRF_FR_1_TOP",
    ZR_CNT_01: "2",
    ZL_CNT_02: "2",
    MAT_BA_1: "$MAT_FR_1",
    MAT_CM_1: "$MAT_FR_1",
    ZM_CNT_02: "1",
    MAT_1: "EG_ED_W980_ST2_18mm",
    SRF_FR_1_TOP: "EG_HPL_HGP_W980_ST7_0_8",
    ZR_CNT_ACC_02: "($ZR_CNT_ACC_01 + $ZR_CNT_02)",
    DS_WACA_ZL_ART_01: "#DS_WACA_U_ART_01",
    SRF_BA_1_TOP: "$SRF_FR_1_TOP",
    SRF_CM_1_TOP: "$SRF_FR_1_TOP",
    DS_WACA_ZM_ART_02: "#DS_WACA_U_ART_01",
    SRF_TS_1_EXT: "$SURF_TS_1_EXT",
    ZR_CNT_ACC_01: "$ZR_CNT_01",
    SURF_TS_1_EXT: "NO_SURF",
    ZR_CNT_02: "1",
    ZB_D: "500",
    DS_WACA_ZL_ART_02: "#DS_WACA_U_ART_01",
    ZM_CNT_ACC_03: "($ZM_CNT_ACC_02 + $ZM_CNT_03)",
    DS_WACA_ZR_ART_01: "#DS_WACA_U_ART_01",
    ZM_CNT_03: "2",
    DS_WACA_ZM_ART_03: "#DS_WACA_U_ART_01",
    ZL_CNT_ACC_03: "($ZL_CNT_ACC_02 + $ZL_CNT_03)",
    DS_WACA_ZR_ART_02: "#DS_WACA_U_ART_01",
    ZL_CNT_03: "1",
    ZM_CNT_ACC_04: "($ZM_CNT_ACC_03 + $ZM_CNT_04)",
    DS_WACA_ZL_ART_03: "#DS_WACA_U_ART_01",
    ZM_CNT_04: "1",
    ZR_CNT_ACC_03: "($ZR_CNT_ACC_02 + $ZR_CNT_03)",
    DS_WACA_ZM_ART_04: "#DS_WACA_U_ART_01",
    ZR_CNT_03: "2",
    ZL_CNT_ACC_04: "($ZL_CNT_ACC_03 + $ZL_CNT_04)",
    DS_WACA_ZR_ART_03: "#DS_WACA_U_ART_01",
    ZL_CNT_04: "2",
    ZM_CNT_ACC_05: "($ZM_CNT_ACC_04 + $ZM_CNT_05)",
    DS_WACA_ZL_ART_04: "#DS_WACA_U_ART_01",
    ZM_CNT_05: "2",
    ZR_CNT_ACC_04: "($ZR_CNT_ACC_03 + $ZR_CNT_04)",
    DS_WACA_ZM_ART_05: "#DS_WACA_U_ART_01",
    ZR_CNT_04: "1",
    DS_WACA_ZR_ART_04: "#DS_WACA_U_ART_01",
    ZL_CNT_ACC_05: "($ZL_CNT_ACC_04 + $ZL_CNT_05)",
    ZM_CNT_ACC_06: "($ZM_CNT_ACC_05 + $ZM_CNT_06)",
    ZM_CNT_06: "1",
    ZL_CNT_05: "1",
    ZR_CNT_ACC_05: "($ZR_CNT_ACC_04 + $ZR_CNT_05)",
    DS_WACA_ZM_ART_06: "#DS_WACA_U_ART_01",
    DS_WACA_ZL_ART_05: "#DS_WACA_U_ART_01",
    ZR_CNT_05: "2",
    DS_WACA_ZR_ART_05: "#DS_WACA_U_ART_01",
    ZL_CNT_ACC_06: "($ZL_CNT_ACC_05 + $ZL_CNT_06)",
    ZM_CNT_ACC_07: "($ZM_CNT_ACC_06 + $ZM_CNT_07)",
    ZR_CNT_ACC_06: "($ZR_CNT_ACC_05 + $ZR_CNT_06)",
    ZL_CNT_06: "2",
    ZM_CNT_07: "1",
    ZR_CNT_06: "1",
    DS_WACA_ZL_ART_06: "#DS_WACA_U_ART_01",
    DS_WACA_ZM_ART_07: "#DS_WACA_U_ART_01",
    DS_WACA_ZR_ART_06: "#DS_WACA_U_ART_01",
    ZL_CNT_ACC_07: "($ZL_CNT_ACC_06 + $ZL_CNT_07)",
    ZM_CNT_ACC_08: "($ZM_CNT_ACC_07 + $ZM_CNT_08)",
    ZR_CNT_ACC_07: "($ZR_CNT_ACC_06 + $ZR_CNT_07)",
    ZL_CNT_07: "1",
    ZM_CNT_08: "1",
    ZR_CNT_07: "1",
    DS_WACA_ZL_ART_07: "#DS_WACA_U_ART_01",
    DS_WACA_ZM_ART_08: "#DS_WACA_U_ART_01",
    DS_WACA_ZR_ART_07: "#DS_WACA_U_ART_01",
    ZL_CNT_ACC_08: "($ZL_CNT_ACC_07 + $ZL_CNT_08)",
    ZR_CNT_ACC_08: "($ZR_CNT_ACC_07 + $ZR_CNT_08)",
    ZL_CNT_08: "1",
    ZR_CNT_08: "1",
    ZM_CNT_ACC_09: "($ZM_CNT_ACC_08 + $ZM_CNT_09)",
    DS_WACA_ZL_ART_08: "#DS_WACA_U_ART_01",
    DS_WACA_ZR_ART_08: "#DS_WACA_U_ART_01",
    ZM_CNT_09: "1",
    DS_WACA_ZM_ART_09: "#DS_WACA_U_ART_01",
    ZR_CNT_ACC_09: "($ZR_CNT_ACC_08 + $ZR_CNT_09)",
    ZL_CNT_ACC_09: "($ZL_CNT_ACC_08 + $ZL_CNT_09)",
    ZR_CNT_09: "1",
    ZL_CNT_09: "1",
    ZM_CNT_ACC_10: "($ZM_CNT_ACC_09 + $ZM_CNT_10)",
    DS_WACA_ZR_ART_09: "#DS_WACA_U_ART_01",
    DS_WACA_ZL_ART_09: "#DS_WACA_U_ART_01",
    ZM_CNT_10: "1",
    DS_WACA_ZM_ART_10: "#DS_WACA_U_ART_01",
    ZL_CNT_ACC_10: "($ZL_CNT_ACC_09 + $ZL_CNT_10)",
    ZR_CNT_ACC_10: "($ZR_CNT_ACC_09 + $ZR_CNT_10)",
    ZL_CNT_10: "1",
    ZM_CNT_ACC_11: "($ZM_CNT_ACC_10 + $ZM_CNT_11)",
    ZR_CNT_10: "1",
    DS_WACA_ZL_ART_10: "#DS_WACA_U_ART_01",
    ZM_CNT_11: "1",
    DS_WACA_ZR_ART_10: "#DS_WACA_U_ART_01",
    DS_WACA_ZM_ART_11: "#DS_WACA_U_ART_01",
    ZL_CNT_ACC_11: "($ZL_CNT_ACC_10 + $ZL_CNT_11)",
    ZR_CNT_ACC_11: "($ZR_CNT_ACC_10 + $ZR_CNT_11)",
    ZL_CNT_11: "1",
    ZM_CNT_ACC_12: "($ZM_CNT_ACC_11 + $ZM_CNT_12)",
    ZR_CNT_11: "1",
    ZM_CNT_12: "1",
    DS_WACA_ZR_ART_11: "#DS_WACA_U_ART_01",
    DS_WACA_ZM_ART_12: "#DS_WACA_U_ART_01",
    ZR_CNT_ACC_12: "($ZR_CNT_ACC_11 + $ZR_CNT_12)",
    ZM_CNT_ACC_13: "($ZM_CNT_ACC_12 + $ZM_CNT_13)",
    ZR_CNT_12: "1",
    ZM_CNT_13: "1",
    DS_WACA_ZR_ART_12: "#DS_WACA_U_ART_01",
    ZR_CNT_ACC_13: "($ZR_CNT_ACC_12 + $ZR_CNT_13)",
    ZM_CNT_ACC_14: "($ZM_CNT_ACC_13 + $ZM_CNT_14)",
    ZR_CNT_13: "1",
    ZM_CNT_14: "1",
    DS_WACA_ZR_ART_13: "#DS_WACA_U_ART_01",
    ZR_CNT_ACC_14: "($ZR_CNT_ACC_13 + $ZR_CNT_14)",
    ZR_CNT_14: "1",
    DS_WACA_ZR_ART_14: "#DS_WACA_U_ART_01",
  },
  descriptors: {
    DS_LD_ZM_SZ_01: [
      {
        action: "($ZL_D + $ZM_STEP + 50) mm:1:($ZR_D + $ZM_STEP + 50) mm",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "=",
                rightValue: "1-$IS_ML_N",
              },
              {
                leftValue: "0",
                comparison: "=",
                rightValue: "1-$IS_ML_P",
              },
            ],
          },
        ],
      },
      {
        action: "($ZL_D + $ZM_STEP + 50) mm:1",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "=",
                rightValue: "1-$IS_ML_N",
              },
              {
                leftValue: "0",
                comparison: "=",
                rightValue: "$IS_ML_P",
              },
            ],
          },
        ],
      },
      {
        action: "($ZM_CNT_01 * $ZM_STEP ) mm:1:($ZR_D + $ZM_STEP + 50)mm",
        nodenum: 3,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "=",
                rightValue: "$IS_ML_N",
              },
              {
                leftValue: "0",
                comparison: "=",
                rightValue: "1-$IS_ML_P",
              },
            ],
          },
        ],
      },
      {
        action: "($ZM_CNT_01 * $ZM_STEP) mm:1",
        nodenum: 4,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "=",
                rightValue: "$IS_ML_N",
              },
              {
                leftValue: "0",
                comparison: "=",
                rightValue: "$IS_ML_P",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 5,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_ZFL_SI: [
      {
        action: "CP_1_FI_1000",
        nodenum: 1,
        roles: [
          {
            roles: [
              {
                leftValue: "AD article height",
                comparison: "=",
                rightValue: "(1-$IS_BI_L) * $ZONE_H",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 2,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZL_SZ_01: [
      {
        action: "($ZL_CNT_01 * $ZL_STEP ) mm:1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "!=",
                rightValue: "1-$IS_LL_P",
              },
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZL_CNT_ACC_02 - $ZL_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "1",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "!=",
                rightValue: "1-$IS_LL_P",
              },
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZL_CNT_ACC_02 - $ZL_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "($ZL_CNT_01 * $ZL_STEP ) mm :1:($ZM_D +  $ZL_STEP +50 ) mm",
        nodenum: 3,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "=",
                rightValue: "1-$IS_LL_P",
              },
            ],
          },
        ],
      },
      {
        action: "1:($ZL_CNT_01 * $ZL_STEP +50) mm",
        nodenum: 4,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_ZFL_FR: [
      {
        action: "CP_1_FI_1111",
        nodenum: 1,
        roles: [
          {
            roles: [
              {
                leftValue: "AD article height",
                comparison: "=",
                rightValue: "($IS_BI_L) * $ZONE_H",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 2,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZM_SZ_02: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZM_CNT_ACC_02 - $ZM_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "($ZM_CNT_02 * $ZM_STEP ) mm:1",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZM_CNT_ACC_02 - $ZM_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_ZFR_SI: [
      {
        action: "CP_1_FI_1000",
        nodenum: 1,
        roles: [
          {
            roles: [
              {
                leftValue: "AD article height",
                comparison: "=",
                rightValue: "(1-$IS_BI_R)* $ZONE_H",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 2,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZR_SZ_01: [
      {
        action: "1:($ZR_CNT_01 * $ZR_STEP ) mm",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "!=",
                rightValue: "1-$IS_RL_N",
              },
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZR_CNT_ACC_02 - $ZR_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "1:(1 * $ZR_STEP ) mm",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "!=",
                rightValue: "1-$IS_RL_N",
              },
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZL_CNT_ACC_02 - $ZR_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "1:($ZB_D + $ZR_STEP +50) mm",
        nodenum: 3,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "=",
                rightValue: "1-$IS_RL_N",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 4,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_ZFR_FR: [
      {
        action: "CP_1_FI_1111",
        nodenum: 1,
        roles: [
          {
            roles: [
              {
                leftValue: "AD article height",
                comparison: "=",
                rightValue: "($IS_BI_R)* $ZONE_H",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 2,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_WACA_U_ART_01: [
      {
        action: "WACAC_SDR_3IAS",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "1",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "CR",
              },
            ],
          },
        ],
      },
      {
        action: "WACAC_SDR_IAS_IHC_IAS",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "1",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "CR",
              },
            ],
          },
        ],
      },
      {
        action: "WACAC_SDR_IHC_2IAS",
        nodenum: 3,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "1",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "CR",
              },
            ],
          },
        ],
      },
      {
        action: "WACAC_SDR_IHC_IAS",
        nodenum: 4,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "1",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "CR",
              },
            ],
          },
        ],
      },
      {
        action: "WACAC_SDR_IOP_IHC_IAS",
        nodenum: 5,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "1",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "CR",
              },
            ],
          },
        ],
      },
      {
        action: "WACAC_SDR_2IHC_IAS",
        nodenum: 6,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "1",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "CR",
              },
            ],
          },
        ],
      },
      {
        action: "WACAC_SDL_IOP_IHC_IAS",
        nodenum: 7,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "1",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "CL",
              },
            ],
          },
        ],
      },
      {
        action: "WACAC_SDL_IHC_IAS",
        nodenum: 8,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "1",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "CL",
              },
            ],
          },
        ],
      },
      {
        action: "WACAC_SDL_IHC_2IAS",
        nodenum: 9,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "1",
              },
              {
                leftValue: "AD zone info02",
                comparison: "=",
                rightValue: "CL",
              },
            ],
          },
        ],
      },
      {
        action: "WACAC_SDL_IAS_IHC_IAS",
        nodenum: 10,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "1",
              },
              {
                leftValue: "AD zone info02",
                comparison: "=",
                rightValue: "CL",
              },
            ],
          },
        ],
      },
      {
        action: "WACAC_SDL_3IAS",
        nodenum: 11,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "1",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "CL",
              },
            ],
          },
        ],
      },
      {
        action: "WACAC_SDL_2IHC_IAS",
        nodenum: 12,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "1",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "CL",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_SD_3IAS",
        nodenum: 13,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "1",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_DD_3IAS",
        nodenum: 14,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "2",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_SD_2DR1_DR2_IHC_IAS",
        nodenum: 15,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "1",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "1",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_DD_2DR1_DR2_IHC_IAS",
        nodenum: 16,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "1",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "2",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_SD_2DR2_IHC_IAS",
        nodenum: 17,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "1",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "1",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_DD_2DR2_IHC_IAS",
        nodenum: 18,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "1",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "2",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_SD_2IDR_2IAS",
        nodenum: 19,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "1",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_DD_2IDR_2IAS",
        nodenum: 20,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "2",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_SD_2IDR_IHC_IAS",
        nodenum: 21,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "1",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "1",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_DD_2IDR_IHC_IAS",
        nodenum: 22,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "1",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "2",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_SD_2IHC_IAS",
        nodenum: 23,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "1",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_DD_2IHC_IAS",
        nodenum: 24,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "2",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_SD_3IDR_2IAS",
        nodenum: 25,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "1",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_DD_3IDR_2IAS",
        nodenum: 26,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "2",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_SD_3IDR_IHC_IAS",
        nodenum: 27,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "1",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_DD_3IDR_IHC_IAS",
        nodenum: 28,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "2",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_SD_4DR1_2IDR_2IAS",
        nodenum: 29,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "1",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "1",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_DD_4DR1_2IDR_2IAS",
        nodenum: 30,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "1",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "2",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_DD_4DR1_IDR_2IAS",
        nodenum: 31,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "1",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "2",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_SD_4DR1_IHC_IAS",
        nodenum: 32,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "1",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "1",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_DD_4DR1_IHC_IAS",
        nodenum: 33,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "1",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "2",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_SD_4IDR_2IAS",
        nodenum: 34,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "1",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_DD_4IDR_2IAS",
        nodenum: 35,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "2",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_SD_5IDR_2IAS",
        nodenum: 36,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "1",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_DD_5IDR_2IAS",
        nodenum: 37,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "2",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_SD_5IDR_IHC_IAS",
        nodenum: 38,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "1",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_DD_5IDR_IHC_IAS",
        nodenum: 39,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "2",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_SD_6IDR_2IAS",
        nodenum: 40,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "1",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_DD_6IDR_2IAS",
        nodenum: 41,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "2",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_SD_6IDR_IHC_IAS",
        nodenum: 42,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "1",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_DD_6IDR_IHC_IAS",
        nodenum: 43,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "2",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_SD_DR1_DR2_DR1_2IDR_2IAS",
        nodenum: 44,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "1",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "1",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_DD_DR1_DR2_DR1_2IDR_2IAS",
        nodenum: 45,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "1",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "2",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_SD_DR1_DR2_DR1_IHC_IAS",
        nodenum: 46,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "1",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "1",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_DD_DR1_DR2_DR1_IHC_IAS",
        nodenum: 47,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "1",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "2",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_SD_DR1_DR3_IHC_IAS",
        nodenum: 48,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "1",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "1",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_DD_DR1_DR3_IHC_IAS",
        nodenum: 49,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "1",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "2",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_SD_DR2_2xDR1_IHC_IAS",
        nodenum: 50,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "1",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "1",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_DD_DR2_2xDR1_IHC_IAS",
        nodenum: 51,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "1",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "2",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_SD_DR3_DR1_IHC_IAS",
        nodenum: 52,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "1",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "1",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_DD_DR3_DR1_IHC_IAS",
        nodenum: 53,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "1",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "2",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_SD_IAS_IHC_IAS",
        nodenum: 54,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "1",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_DD_IAS_IHC_IAS",
        nodenum: 55,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "2",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_SD_IDR_2IAS",
        nodenum: 56,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "1",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_DD_IDR_2IAS",
        nodenum: 57,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "2",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_SD_IDR_IHC_IAS",
        nodenum: 58,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "1",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_DD_IDR_IHC_IAS",
        nodenum: 59,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "2",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_SD_IHC_2IAS",
        nodenum: 60,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "1",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_DD_IHC_2IAS",
        nodenum: 61,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "2",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_SD_IHC_IAS",
        nodenum: 62,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "1",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_DD_IHC_IAS",
        nodenum: 63,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "2",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_SD_IOP_4IDR_IHC_IAS",
        nodenum: 64,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "1",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_DD_IOP_4IDR_IHC_IAS",
        nodenum: 65,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info05",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "2",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_SD_IOP_IHC_IAS",
        nodenum: 66,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "1",
              },
            ],
          },
        ],
      },
      {
        action: "WACA_DD_IOP_IHC_IAS",
        nodenum: 67,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "AD zone info01",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info02",
                comparison: "C",
                rightValue: "MD",
              },
              {
                leftValue: "AD zone info03",
                comparison: "=",
                rightValue: "1",
              },
              {
                leftValue: "AD zone info04",
                comparison: "=",
                rightValue: "0",
              },
              {
                leftValue: "AD zone info06",
                comparison: "=",
                rightValue: "2",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 68,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZL_SZ_02: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZL_CNT_ACC_02 - $ZL_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "($ZL_CNT_02 * $ZL_STEP ) mm:1",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZL_CNT_ACC_02 - $ZL_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZM_SZ_03: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZM_CNT_ACC_03 - $ZM_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "($ZM_CNT_03 * $ZM_STEP ) mm:1",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZM_CNT_ACC_03 - $ZM_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZL_SZ_03: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZL_CNT_ACC_03 - $ZL_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "($ZL_CNT_03 * $ZL_STEP ) mm:1",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZL_CNT_ACC_03 - $ZL_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZR_SZ_02: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZR_CNT_ACC_02 - $ZR_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "1:($ZR_CNT_02 * $ZR_STEP ) mm",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZR_CNT_ACC_02 - $ZR_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZM_SZ_04: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZM_CNT_ACC_04 - $ZM_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "($ZM_CNT_04 * $ZM_STEP ) mm:1",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZM_CNT_ACC_04 - $ZM_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZR_SZ_03: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZR_CNT_ACC_03 - $ZR_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "1:($ZR_CNT_03 * $ZR_STEP ) mm",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZR_CNT_ACC_03 - $ZR_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZL_SZ_04: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZL_CNT_ACC_04 - $ZL_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "($ZL_CNT_04 * $ZL_STEP ) mm:1",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZL_CNT_ACC_04 - $ZL_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZM_SZ_05: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZM_CNT_ACC_05 - $ZM_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "($ZM_CNT_05 * $ZM_STEP ) mm:1",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZM_CNT_ACC_05 - $ZM_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZR_SZ_04: [
      {
        action: "1:(1 * $ZR_STEP ) mm",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZR_CNT_ACC_04 - $ZR_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "1:($ZR_CNT_04 * $ZR_STEP ) mm",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZR_CNT_ACC_04 - $ZR_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZL_SZ_05: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZL_CNT_ACC_05 - $ZL_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "($ZL_CNT_05 * $ZL_STEP ) mm:1",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZL_CNT_ACC_05 - $ZL_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZM_SZ_06: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZM_CNT_ACC_06 - $ZM_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "($ZM_CNT_06 * $ZM_STEP ) mm:1",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZM_CNT_ACC_06 - $ZM_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZR_SZ_05: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZR_CNT_ACC_05 - $ZR_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "1:($ZR_CNT_05 * $ZR_STEP ) mm",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZR_CNT_ACC_05 - $ZR_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZM_SZ_07: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZM_CNT_ACC_07 - $ZM_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "($ZM_CNT_07 * $ZM_STEP ) mm:1",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZM_CNT_ACC_07 - $ZM_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZL_SZ_06: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZL_CNT_ACC_06 - $ZL_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "($ZL_CNT_06 * $ZL_STEP ) mm:1",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZL_CNT_ACC_06 - $ZL_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZR_SZ_06: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZR_CNT_ACC_06 - $ZR_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "1:($ZR_CNT_06 * $ZR_STEP ) mm",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZR_CNT_ACC_06 - $ZR_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZL_SZ_07: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZL_CNT_ACC_07 - $ZL_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "($ZL_CNT_07 * $ZL_STEP ) mm:1",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZL_CNT_ACC_07 - $ZL_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZM_SZ_08: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZM_CNT_ACC_08 - $ZM_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "($ZM_CNT_08 * $ZM_STEP ) mm:1",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZM_CNT_ACC_08 - $ZM_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZR_SZ_07: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZR_CNT_ACC_07 - $ZR_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "1:($ZR_CNT_07 * $ZR_STEP ) mm",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZR_CNT_ACC_07 - $ZR_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZL_SZ_08: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZL_CNT_ACC_08 - $ZL_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "($ZL_CNT_08 * $ZL_STEP ) mm:1",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZL_CNT_ACC_08 - $ZL_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZR_SZ_08: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZR_CNT_ACC_08 - $ZR_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "1:($ZR_CNT_08 * $ZR_STEP ) mm",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZR_CNT_ACC_08 - $ZR_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZM_SZ_09: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZM_CNT_ACC_09 - $ZM_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "($ZM_CNT_09 * $ZM_STEP ) mm:1",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZM_CNT_ACC_09 - $ZM_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZR_SZ_09: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZR_CNT_ACC_09 - $ZR_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "1:($ZR_CNT_09 * $ZR_STEP ) mm",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZR_CNT_ACC_09 - $ZR_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZL_SZ_09: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZL_CNT_ACC_09 - $ZL_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "($ZL_CNT_09 * $ZL_STEP ) mm:1",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZL_CNT_ACC_09 - $ZL_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZM_SZ_10: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZM_CNT_ACC_10 - $ZM_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "($ZM_CNT_10 * $ZM_STEP ) mm:1",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZM_CNT_ACC_10 - $ZM_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZL_SZ_10: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZL_CNT_ACC_10 - $ZL_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "($ZL_CNT_10 * $ZL_STEP ) mm:1",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZL_CNT_ACC_10 - $ZL_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZR_SZ_10: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZR_CNT_ACC_10 - $ZR_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "1:($ZR_CNT_10 * $ZR_STEP ) mm",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZR_CNT_ACC_10 - $ZR_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZM_SZ_11: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZM_CNT_ACC_11 - $ZM_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "($ZM_CNT_11 * $ZM_STEP ) mm:1",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZM_CNT_ACC_11 - $ZM_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZL_SZ_11: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZL_CNT_ACC_11 - $ZL_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "($ZL_CNT_11 * $ZL_STEP ) mm:1",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZL_CNT_ACC_11 - $ZL_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZR_SZ_11: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZR_CNT_ACC_11 - $ZR_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "1:($ZR_CNT_11 * $ZR_STEP ) mm",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZR_CNT_ACC_11 - $ZR_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZM_SZ_12: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZM_CNT_ACC_12 - $ZM_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "($ZM_CNT_12 * $ZM_STEP ) mm:1",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZM_CNT_ACC_12 - $ZM_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZR_SZ_12: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZR_CNT_ACC_12 - $ZR_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "1:($ZR_CNT_12 * $ZR_STEP ) mm",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZR_CNT_ACC_12 - $ZR_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZM_SZ_13: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZM_CNT_ACC_13 - $ZM_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "($ZM_CNT_13 * $ZM_STEP ) mm:1",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZM_CNT_ACC_13 - $ZM_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZR_SZ_13: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZR_CNT_ACC_13 - $ZR_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "1:($ZR_CNT_13 * $ZR_STEP ) mm",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZR_CNT_ACC_13 - $ZR_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZM_SZ_14: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZM_CNT_ACC_14 - $ZM_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "($ZM_CNT_14 * $ZM_STEP ) mm:1",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZM_CNT_ACC_14 - $ZM_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
    DS_LD_ZR_SZ_14: [
      {
        action: "1",
        nodenum: 1,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: "<=",
                rightValue: "$ZR_CNT_ACC_14 - $ZR_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "1:($ZR_CNT_14 * $ZR_STEP ) mm",
        nodenum: 2,
        roles: [
          {
            operator: "AND",
            roles: [
              {
                leftValue: "0",
                comparison: ">",
                rightValue: "$ZR_CNT_ACC_14 - $ZR_CNT",
              },
            ],
          },
        ],
      },
      {
        action: "",
        nodenum: 3,
        roles: [
          {
            roles: [],
          },
        ],
      },
    ],
  },
  zone: {
    name: "OAKSOME_SHAPE_U_TEST_V1",
    index: "0",
    side: "FRONT",
    variables: {},
    divDir: "I",
    linDiv: "4*{1}",
    divElem: 0,
    horDefType: "P",
    top: null,
    bottom: null,
    divider: null,
    children: [
      {
        index: "0.0",
        divDir: "H",
        linDiv: "1:$ZR_D mm",
        divElem: 0,
        horDefType: "W",
        top: null,
        bottom: null,
        divider: null,
        children: [
          {
            index: "0.0.0",
            divDir: "V",
            linDiv: "",
            divElem: 0,
            horDefType: "P",
            top: null,
            bottom: null,
            divider: null,
            children: [],
            empty: true,
            sides: {
              "0": null,
              "1": null,
              "2": null,
              "3": null,
            },
          },
          {
            index: "0.0.1",
            divDir: "H",
            linDiv: "1:($ZR_W + $IS_RL_N * $ZM_D)mm:((1-$IS_RL_N)*$ZM_D)mm",
            divElem: 0,
            horDefType: "D",
            top: null,
            bottom: null,
            divider: null,
            children: [
              {
                index: "0.0.1.0",
                divDir: "V",
                linDiv: "",
                divElem: 0,
                horDefType: "P",
                top: null,
                bottom: null,
                divider: null,
                children: [],
                sides: {
                  "0": null,
                  "1": null,
                  "2": null,
                  "3": null,
                },
              },
              {
                index: "0.0.1.1",
                divDir: "H",
                linDiv: "((1-$IS_BI_R)*$FI_1_THK) mm:1",
                divElem: 0,
                horDefType: "D",
                top: null,
                bottom: null,
                divider: null,
                children: [
                  {
                    index: "0.0.1.1.0",
                    divDir: "V",
                    linDiv: "",
                    divElem: 0,
                    horDefType: "P",
                    top: null,
                    bottom: null,
                    divider: null,
                    children: [],
                    sides: {
                      "0": {
                        inSet: 0,
                        inSetFor: "",
                        partType: "S",
                        cpName: "#DS_ZFR_SI",
                      },
                      "1": null,
                      "2": null,
                      "3": null,
                    },
                  },
                  {
                    index: "0.0.1.1.1",
                    divDir: "V",
                    linDiv: "$BASE_HEIGHT mm:1:$CROWN_HEIGHT mm",
                    divElem: 0,
                    horDefType: "D",
                    top: null,
                    bottom: null,
                    divider: null,
                    children: [
                      {
                        index: "0.0.1.1.1.0",
                        divDir: "H",
                        linDiv: "((round(2700/$ZR_STEP-0.5) ) *$ZR_STEP)mm:1",
                        divElem: 0,
                        horDefType: "D",
                        top: null,
                        bottom: null,
                        divider: null,
                        children: [
                          {
                            index: "0.0.1.1.1.0.0",
                            divDir: "V",
                            linDiv: "",
                            divElem: 0,
                            horDefType: "P",
                            top: null,
                            bottom: null,
                            divider: null,
                            children: [],
                            sides: {
                              "0": null,
                              "1": null,
                              "2": null,
                              "3": {
                                inSet: 0,
                                inSetFor: "",
                                partType: "S",
                                cpName: "CP_1_BA_1000",
                              },
                            },
                          },
                          {
                            index: "0.0.1.1.1.0.1",
                            divDir: "V",
                            linDiv: "",
                            divElem: 0,
                            horDefType: "P",
                            top: null,
                            bottom: null,
                            divider: null,
                            children: [],
                            sides: {
                              "0": null,
                              "1": null,
                              "2": null,
                              "3": {
                                inSet: 0,
                                inSetFor: "",
                                partType: "S",
                                cpName: "CP_1_BA_1000",
                              },
                            },
                          },
                        ],
                        sides: {
                          "0": null,
                          "1": null,
                          "2": null,
                          "3": null,
                        },
                      },
                      {
                        index: "0.0.1.1.1.1",
                        divDir: "H",
                        linDiv: "($IS_BI_R*$ZFR_W) mm:1",
                        divElem: 0,
                        horDefType: "D",
                        top: null,
                        bottom: null,
                        divider: null,
                        children: [
                          {
                            index: "0.0.1.1.1.1.0",
                            divDir: "V",
                            linDiv: "",
                            divElem: 0,
                            horDefType: "P",
                            top: null,
                            bottom: null,
                            divider: null,
                            children: [],
                            sides: {
                              "0": null,
                              "1": null,
                              "2": {
                                inSet: -20.1,
                                inSetFor:
                                    "-$Front_Side_GAP-$MAT_FR_1_THK-2*$SRF_FR_1_THK",
                                partType: "S",
                                cpName: "#DS_ZFR_FR",
                              },
                              "3": null,
                            },
                          },
                          {
                            index: "0.0.1.1.1.1.1",
                            divDir: "H",
                            linDiv: "1:((1-$IS_RL_N) * 50)mm",
                            divElem: 0,
                            horDefType: "D",
                            top: null,
                            bottom: null,
                            divider: null,
                            children: [
                              {
                                index: "0.0.1.1.1.1.1.0",
                                divDir: "H",
                                linDiv: "#DS_LD_ZR_SZ_01",
                                divElem: 0,
                                horDefType: "D",
                                top: null,
                                bottom: null,
                                divider: null,
                                children: [
                                  {
                                    index: "0.0.1.1.1.1.1.0.0",
                                    divDir: "H",
                                    linDiv: "#DS_LD_ZR_SZ_02",
                                    divElem: 0,
                                    horDefType: "D",
                                    top: null,
                                    bottom: null,
                                    divider: null,
                                    children: [
                                      {
                                        index: "0.0.1.1.1.1.1.0.0.0",
                                        divDir: "H",
                                        linDiv: "#DS_LD_ZR_SZ_03",
                                        divElem: 0,
                                        horDefType: "D",
                                        top: null,
                                        bottom: null,
                                        divider: null,
                                        children: [
                                          {
                                            index: "0.0.1.1.1.1.1.0.0.0.0",
                                            divDir: "H",
                                            linDiv: "#DS_LD_ZR_SZ_04",
                                            divElem: 0,
                                            horDefType: "D",
                                            top: null,
                                            bottom: null,
                                            divider: null,
                                            children: [
                                              {
                                                index:
                                                    "0.0.1.1.1.1.1.0.0.0.0.0",
                                                divDir: "H",
                                                linDiv: "#DS_LD_ZR_SZ_05",
                                                divElem: 0,
                                                horDefType: "D",
                                                top: null,
                                                bottom: null,
                                                divider: null,
                                                children: [
                                                  {
                                                    index:
                                                        "0.0.1.1.1.1.1.0.0.0.0.0.0",
                                                    divDir: "H",
                                                    linDiv: "#DS_LD_ZR_SZ_06",
                                                    divElem: 0,
                                                    horDefType: "D",
                                                    top: null,
                                                    bottom: null,
                                                    divider: null,
                                                    children: [
                                                      {
                                                        index:
                                                            "0.0.1.1.1.1.1.0.0.0.0.0.0.0",
                                                        divDir: "H",
                                                        linDiv:
                                                            "#DS_LD_ZR_SZ_07",
                                                        divElem: 0,
                                                        horDefType: "D",
                                                        top: null,
                                                        bottom: null,
                                                        divider: null,
                                                        children: [
                                                          {
                                                            index:
                                                                "0.0.1.1.1.1.1.0.0.0.0.0.0.0.0",
                                                            divDir: "H",
                                                            linDiv:
                                                                "#DS_LD_ZR_SZ_08",
                                                            divElem: 0,
                                                            horDefType: "D",
                                                            top: null,
                                                            bottom: null,
                                                            divider: null,
                                                            children: [
                                                              {
                                                                index:
                                                                    "0.0.1.1.1.1.1.0.0.0.0.0.0.0.0.0",
                                                                divDir: "H",
                                                                linDiv:
                                                                    "#DS_LD_ZR_SZ_09",
                                                                divElem: 0,
                                                                horDefType: "D",
                                                                top: null,
                                                                bottom: null,
                                                                divider: null,
                                                                children: [
                                                                  {
                                                                    index:
                                                                        "0.0.1.1.1.1.1.0.0.0.0.0.0.0.0.0.0",
                                                                    divDir: "H",
                                                                    linDiv:
                                                                        "#DS_LD_ZR_SZ_10",
                                                                    divElem: 0,
                                                                    horDefType:
                                                                        "D",
                                                                    top: null,
                                                                    bottom:
                                                                        null,
                                                                    divider:
                                                                        null,
                                                                    children: [
                                                                      {
                                                                        index:
                                                                            "0.0.1.1.1.1.1.0.0.0.0.0.0.0.0.0.0.0",
                                                                        divDir:
                                                                            "H",
                                                                        linDiv:
                                                                            "#DS_LD_ZR_SZ_11",
                                                                        divElem: 0,
                                                                        horDefType:
                                                                            "D",
                                                                        top: null,
                                                                        bottom:
                                                                            null,
                                                                        divider:
                                                                            null,
                                                                        children:
                                                                            [
                                                                              {
                                                                                index:
                                                                                    "0.0.1.1.1.1.1.0.0.0.0.0.0.0.0.0.0.0.0",
                                                                                divDir:
                                                                                    "H",
                                                                                linDiv:
                                                                                    "#DS_LD_ZR_SZ_12",
                                                                                divElem: 0,
                                                                                horDefType:
                                                                                    "D",
                                                                                top: null,
                                                                                bottom:
                                                                                    null,
                                                                                divider:
                                                                                    null,
                                                                                children:
                                                                                    [
                                                                                      {
                                                                                        index:
                                                                                            "0.0.1.1.1.1.1.0.0.0.0.0.0.0.0.0.0.0.0.0",
                                                                                        divDir:
                                                                                            "H",
                                                                                        linDiv:
                                                                                            "#DS_LD_ZR_SZ_13",
                                                                                        divElem: 0,
                                                                                        horDefType:
                                                                                            "D",
                                                                                        top: null,
                                                                                        bottom:
                                                                                            null,
                                                                                        divider:
                                                                                            null,
                                                                                        children:
                                                                                            [
                                                                                              {
                                                                                                index:
                                                                                                    "0.0.1.1.1.1.1.0.0.0.0.0.0.0.0.0.0.0.0.0.0",
                                                                                                divDir:
                                                                                                    "H",
                                                                                                linDiv:
                                                                                                    "#DS_LD_ZR_SZ_14",
                                                                                                divElem: 0,
                                                                                                horDefType:
                                                                                                    "D",
                                                                                                top: null,
                                                                                                bottom:
                                                                                                    null,
                                                                                                divider:
                                                                                                    null,
                                                                                                children:
                                                                                                    [
                                                                                                      {
                                                                                                        index:
                                                                                                            "0.0.1.1.1.1.1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0",
                                                                                                        divDir:
                                                                                                            "V",
                                                                                                        linDiv:
                                                                                                            "",
                                                                                                        divElem: 0,
                                                                                                        horDefType:
                                                                                                            "P",
                                                                                                        top: null,
                                                                                                        bottom:
                                                                                                            null,
                                                                                                        divider:
                                                                                                            null,
                                                                                                        children:
                                                                                                            [],
                                                                                                        sides:
                                                                                                            {
                                                                                                              "0": null,
                                                                                                              "1": null,
                                                                                                              "2": null,
                                                                                                              "3": null,
                                                                                                            },
                                                                                                      },
                                                                                                      {
                                                                                                        grtx: {
                                                                                                          "AD zone info01":
                                                                                                              "0",
                                                                                                          "AD zone info02":
                                                                                                              "MD",
                                                                                                          "AD zone info03":
                                                                                                              "$HAS_HC",
                                                                                                          "AD zone info04":
                                                                                                              "$HAS_DR",
                                                                                                          "AD zone info05":
                                                                                                              "$IS_DR_EXT",
                                                                                                          "AD zone info06":
                                                                                                              "$ZR_CNT_14",
                                                                                                        },
                                                                                                        index:
                                                                                                            "0.0.1.1.1.1.1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.1",
                                                                                                        divDir:
                                                                                                            "A",
                                                                                                        linDiv:
                                                                                                            "1:1",
                                                                                                        divElem: 0,
                                                                                                        horDefType:
                                                                                                            "P",
                                                                                                        top: null,
                                                                                                        bottom:
                                                                                                            null,
                                                                                                        divider:
                                                                                                            "$DS_WACA_ZR_ART_14",
                                                                                                        children:
                                                                                                            [
                                                                                                              {
                                                                                                                index:
                                                                                                                    "0.0.1.1.1.1.1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.1.0",
                                                                                                                divDir:
                                                                                                                    "V",
                                                                                                                linDiv:
                                                                                                                    "",
                                                                                                                divElem: 0,
                                                                                                                horDefType:
                                                                                                                    "P",
                                                                                                                top: null,
                                                                                                                bottom:
                                                                                                                    null,
                                                                                                                divider:
                                                                                                                    null,
                                                                                                                children:
                                                                                                                    [],
                                                                                                                sides:
                                                                                                                    {
                                                                                                                      "0": null,
                                                                                                                      "1": null,
                                                                                                                      "2": null,
                                                                                                                      "3": null,
                                                                                                                    },
                                                                                                              },
                                                                                                              {
                                                                                                                index:
                                                                                                                    "0.0.1.1.1.1.1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.1.1",
                                                                                                                divDir:
                                                                                                                    "V",
                                                                                                                linDiv:
                                                                                                                    "",
                                                                                                                divElem: 0,
                                                                                                                horDefType:
                                                                                                                    "P",
                                                                                                                top: null,
                                                                                                                bottom:
                                                                                                                    null,
                                                                                                                divider:
                                                                                                                    null,
                                                                                                                children:
                                                                                                                    [],
                                                                                                                sides:
                                                                                                                    {
                                                                                                                      "0": null,
                                                                                                                      "1": null,
                                                                                                                      "2": null,
                                                                                                                      "3": null,
                                                                                                                    },
                                                                                                              },
                                                                                                            ],
                                                                                                        selectable: true,
                                                                                                        sides:
                                                                                                            {
                                                                                                              "0": null,
                                                                                                              "1": null,
                                                                                                              "2": null,
                                                                                                              "3": null,
                                                                                                            },
                                                                                                      },
                                                                                                    ],
                                                                                                sides:
                                                                                                    {
                                                                                                      "0": null,
                                                                                                      "1": null,
                                                                                                      "2": null,
                                                                                                      "3": null,
                                                                                                    },
                                                                                              },
                                                                                              {
                                                                                                grtx: {
                                                                                                  "AD zone info01":
                                                                                                      "0",
                                                                                                  "AD zone info02":
                                                                                                      "MD",
                                                                                                  "AD zone info03":
                                                                                                      "$HAS_HC",
                                                                                                  "AD zone info04":
                                                                                                      "$HAS_DR",
                                                                                                  "AD zone info05":
                                                                                                      "$IS_DR_EXT",
                                                                                                  "AD zone info06":
                                                                                                      "$ZR_CNT_13",
                                                                                                },
                                                                                                index:
                                                                                                    "0.0.1.1.1.1.1.0.0.0.0.0.0.0.0.0.0.0.0.0.1",
                                                                                                divDir:
                                                                                                    "A",
                                                                                                linDiv:
                                                                                                    "1:1",
                                                                                                divElem: 0,
                                                                                                horDefType:
                                                                                                    "P",
                                                                                                top: null,
                                                                                                bottom:
                                                                                                    null,
                                                                                                divider:
                                                                                                    "$DS_WACA_ZR_ART_13",
                                                                                                children:
                                                                                                    [
                                                                                                      {
                                                                                                        index:
                                                                                                            "0.0.1.1.1.1.1.0.0.0.0.0.0.0.0.0.0.0.0.0.1.0",
                                                                                                        divDir:
                                                                                                            "V",
                                                                                                        linDiv:
                                                                                                            "",
                                                                                                        divElem: 0,
                                                                                                        horDefType:
                                                                                                            "P",
                                                                                                        top: null,
                                                                                                        bottom:
                                                                                                            null,
                                                                                                        divider:
                                                                                                            null,
                                                                                                        children:
                                                                                                            [],
                                                                                                        sides:
                                                                                                            {
                                                                                                              "0": null,
                                                                                                              "1": null,
                                                                                                              "2": null,
                                                                                                              "3": null,
                                                                                                            },
                                                                                                      },
                                                                                                      {
                                                                                                        index:
                                                                                                            "0.0.1.1.1.1.1.0.0.0.0.0.0.0.0.0.0.0.0.0.1.1",
                                                                                                        divDir:
                                                                                                            "V",
                                                                                                        linDiv:
                                                                                                            "",
                                                                                                        divElem: 0,
                                                                                                        horDefType:
                                                                                                            "P",
                                                                                                        top: null,
                                                                                                        bottom:
                                                                                                            null,
                                                                                                        divider:
                                                                                                            null,
                                                                                                        children:
                                                                                                            [],
                                                                                                        sides:
                                                                                                            {
                                                                                                              "0": null,
                                                                                                              "1": null,
                                                                                                              "2": null,
                                                                                                              "3": null,
                                                                                                            },
                                                                                                      },
                                                                                                    ],
                                                                                                selectable: true,
                                                                                                sides:
                                                                                                    {
                                                                                                      "0": null,
                                                                                                      "1": null,
                                                                                                      "2": null,
                                                                                                      "3": null,
                                                                                                    },
                                                                                              },
                                                                                            ],
                                                                                        sides:
                                                                                            {
                                                                                              "0": null,
                                                                                              "1": null,
                                                                                              "2": null,
                                                                                              "3": null,
                                                                                            },
                                                                                      },
                                                                                      {
                                                                                        grtx: {
                                                                                          "AD zone info01":
                                                                                              "0",
                                                                                          "AD zone info02":
                                                                                              "MD",
                                                                                          "AD zone info03":
                                                                                              "$HAS_HC",
                                                                                          "AD zone info04":
                                                                                              "$HAS_DR",
                                                                                          "AD zone info05":
                                                                                              "$IS_DR_EXT",
                                                                                          "AD zone info06":
                                                                                              "$ZR_CNT_12",
                                                                                        },
                                                                                        index:
                                                                                            "0.0.1.1.1.1.1.0.0.0.0.0.0.0.0.0.0.0.0.1",
                                                                                        divDir:
                                                                                            "A",
                                                                                        linDiv:
                                                                                            "1:1",
                                                                                        divElem: 0,
                                                                                        horDefType:
                                                                                            "P",
                                                                                        top: null,
                                                                                        bottom:
                                                                                            null,
                                                                                        divider:
                                                                                            "$DS_WACA_ZR_ART_12",
                                                                                        children:
                                                                                            [
                                                                                              {
                                                                                                index:
                                                                                                    "0.0.1.1.1.1.1.0.0.0.0.0.0.0.0.0.0.0.0.1.0",
                                                                                                divDir:
                                                                                                    "V",
                                                                                                linDiv:
                                                                                                    "",
                                                                                                divElem: 0,
                                                                                                horDefType:
                                                                                                    "P",
                                                                                                top: null,
                                                                                                bottom:
                                                                                                    null,
                                                                                                divider:
                                                                                                    null,
                                                                                                children:
                                                                                                    [],
                                                                                                sides:
                                                                                                    {
                                                                                                      "0": null,
                                                                                                      "1": null,
                                                                                                      "2": null,
                                                                                                      "3": null,
                                                                                                    },
                                                                                              },
                                                                                              {
                                                                                                index:
                                                                                                    "0.0.1.1.1.1.1.0.0.0.0.0.0.0.0.0.0.0.0.1.1",
                                                                                                divDir:
                                                                                                    "V",
                                                                                                linDiv:
                                                                                                    "",
                                                                                                divElem: 0,
                                                                                                horDefType:
                                                                                                    "P",
                                                                                                top: null,
                                                                                                bottom:
                                                                                                    null,
                                                                                                divider:
                                                                                                    null,
                                                                                                children:
                                                                                                    [],
                                                                                                sides:
                                                                                                    {
                                                                                                      "0": null,
                                                                                                      "1": null,
                                                                                                      "2": null,
                                                                                                      "3": null,
                                                                                                    },
                                                                                              },
                                                                                            ],
                                                                                        selectable: true,
                                                                                        sides:
                                                                                            {
                                                                                              "0": null,
                                                                                              "1": null,
                                                                                              "2": null,
                                                                                              "3": null,
                                                                                            },
                                                                                      },
                                                                                    ],
                                                                                sides:
                                                                                    {
                                                                                      "0": null,
                                                                                      "1": null,
                                                                                      "2": null,
                                                                                      "3": null,
                                                                                    },
                                                                              },
                                                                              {
                                                                                grtx: {
                                                                                  "AD zone info01":
                                                                                      "0",
                                                                                  "AD zone info02":
                                                                                      "MD",
                                                                                  "AD zone info03":
                                                                                      "$HAS_HC",
                                                                                  "AD zone info04":
                                                                                      "$HAS_DR",
                                                                                  "AD zone info05":
                                                                                      "$IS_DR_EXT",
                                                                                  "AD zone info06":
                                                                                      "$ZR_CNT_11",
                                                                                },
                                                                                index:
                                                                                    "0.0.1.1.1.1.1.0.0.0.0.0.0.0.0.0.0.0.1",
                                                                                divDir:
                                                                                    "A",
                                                                                linDiv:
                                                                                    "1:1",
                                                                                divElem: 0,
                                                                                horDefType:
                                                                                    "P",
                                                                                top: null,
                                                                                bottom:
                                                                                    null,
                                                                                divider:
                                                                                    "$DS_WACA_ZR_ART_11",
                                                                                children:
                                                                                    [
                                                                                      {
                                                                                        index:
                                                                                            "0.0.1.1.1.1.1.0.0.0.0.0.0.0.0.0.0.0.1.0",
                                                                                        divDir:
                                                                                            "V",
                                                                                        linDiv:
                                                                                            "",
                                                                                        divElem: 0,
                                                                                        horDefType:
                                                                                            "P",
                                                                                        top: null,
                                                                                        bottom:
                                                                                            null,
                                                                                        divider:
                                                                                            null,
                                                                                        children:
                                                                                            [],
                                                                                        sides:
                                                                                            {
                                                                                              "0": null,
                                                                                              "1": null,
                                                                                              "2": null,
                                                                                              "3": null,
                                                                                            },
                                                                                      },
                                                                                      {
                                                                                        index:
                                                                                            "0.0.1.1.1.1.1.0.0.0.0.0.0.0.0.0.0.0.1.1",
                                                                                        divDir:
                                                                                            "V",
                                                                                        linDiv:
                                                                                            "",
                                                                                        divElem: 0,
                                                                                        horDefType:
                                                                                            "P",
                                                                                        top: null,
                                                                                        bottom:
                                                                                            null,
                                                                                        divider:
                                                                                            null,
                                                                                        children:
                                                                                            [],
                                                                                        sides:
                                                                                            {
                                                                                              "0": null,
                                                                                              "1": null,
                                                                                              "2": null,
                                                                                              "3": null,
                                                                                            },
                                                                                      },
                                                                                    ],
                                                                                selectable: true,
                                                                                sides:
                                                                                    {
                                                                                      "0": null,
                                                                                      "1": null,
                                                                                      "2": null,
                                                                                      "3": null,
                                                                                    },
                                                                              },
                                                                            ],
                                                                        sides: {
                                                                          "0": null,
                                                                          "1": null,
                                                                          "2": null,
                                                                          "3": null,
                                                                        },
                                                                      },
                                                                      {
                                                                        grtx: {
                                                                          "AD zone info01":
                                                                              "0",
                                                                          "AD zone info02":
                                                                              "MD",
                                                                          "AD zone info03":
                                                                              "$HAS_HC",
                                                                          "AD zone info04":
                                                                              "$HAS_DR",
                                                                          "AD zone info05":
                                                                              "$IS_DR_EXT",
                                                                          "AD zone info06":
                                                                              "$ZR_CNT_10",
                                                                        },
                                                                        index:
                                                                            "0.0.1.1.1.1.1.0.0.0.0.0.0.0.0.0.0.1",
                                                                        divDir:
                                                                            "A",
                                                                        linDiv:
                                                                            "1:1",
                                                                        divElem: 0,
                                                                        horDefType:
                                                                            "P",
                                                                        top: null,
                                                                        bottom:
                                                                            null,
                                                                        divider:
                                                                            "$DS_WACA_ZR_ART_10",
                                                                        children:
                                                                            [
                                                                              {
                                                                                index:
                                                                                    "0.0.1.1.1.1.1.0.0.0.0.0.0.0.0.0.0.1.0",
                                                                                divDir:
                                                                                    "V",
                                                                                linDiv:
                                                                                    "",
                                                                                divElem: 0,
                                                                                horDefType:
                                                                                    "P",
                                                                                top: null,
                                                                                bottom:
                                                                                    null,
                                                                                divider:
                                                                                    null,
                                                                                children:
                                                                                    [],
                                                                                sides:
                                                                                    {
                                                                                      "0": null,
                                                                                      "1": null,
                                                                                      "2": null,
                                                                                      "3": null,
                                                                                    },
                                                                              },
                                                                              {
                                                                                index:
                                                                                    "0.0.1.1.1.1.1.0.0.0.0.0.0.0.0.0.0.1.1",
                                                                                divDir:
                                                                                    "V",
                                                                                linDiv:
                                                                                    "",
                                                                                divElem: 0,
                                                                                horDefType:
                                                                                    "P",
                                                                                top: null,
                                                                                bottom:
                                                                                    null,
                                                                                divider:
                                                                                    null,
                                                                                children:
                                                                                    [],
                                                                                sides:
                                                                                    {
                                                                                      "0": null,
                                                                                      "1": null,
                                                                                      "2": null,
                                                                                      "3": null,
                                                                                    },
                                                                              },
                                                                            ],
                                                                        selectable: true,
                                                                        sides: {
                                                                          "0": null,
                                                                          "1": null,
                                                                          "2": null,
                                                                          "3": null,
                                                                        },
                                                                      },
                                                                    ],
                                                                    sides: {
                                                                      "0": null,
                                                                      "1": null,
                                                                      "2": null,
                                                                      "3": null,
                                                                    },
                                                                  },
                                                                  {
                                                                    grtx: {
                                                                      "AD zone info01":
                                                                          "0",
                                                                      "AD zone info02":
                                                                          "MD",
                                                                      "AD zone info03":
                                                                          "$HAS_HC",
                                                                      "AD zone info04":
                                                                          "$HAS_DR",
                                                                      "AD zone info05":
                                                                          "$IS_DR_EXT",
                                                                      "AD zone info06":
                                                                          "$ZR_CNT_09",
                                                                    },
                                                                    index:
                                                                        "0.0.1.1.1.1.1.0.0.0.0.0.0.0.0.0.1",
                                                                    divDir: "A",
                                                                    linDiv:
                                                                        "1:1",
                                                                    divElem: 0,
                                                                    horDefType:
                                                                        "P",
                                                                    top: null,
                                                                    bottom:
                                                                        null,
                                                                    divider:
                                                                        "$DS_WACA_ZR_ART_09",
                                                                    children: [
                                                                      {
                                                                        index:
                                                                            "0.0.1.1.1.1.1.0.0.0.0.0.0.0.0.0.1.0",
                                                                        divDir:
                                                                            "V",
                                                                        linDiv:
                                                                            "",
                                                                        divElem: 0,
                                                                        horDefType:
                                                                            "P",
                                                                        top: null,
                                                                        bottom:
                                                                            null,
                                                                        divider:
                                                                            null,
                                                                        children:
                                                                            [],
                                                                        sides: {
                                                                          "0": null,
                                                                          "1": null,
                                                                          "2": null,
                                                                          "3": null,
                                                                        },
                                                                      },
                                                                      {
                                                                        index:
                                                                            "0.0.1.1.1.1.1.0.0.0.0.0.0.0.0.0.1.1",
                                                                        divDir:
                                                                            "V",
                                                                        linDiv:
                                                                            "",
                                                                        divElem: 0,
                                                                        horDefType:
                                                                            "P",
                                                                        top: null,
                                                                        bottom:
                                                                            null,
                                                                        divider:
                                                                            null,
                                                                        children:
                                                                            [],
                                                                        sides: {
                                                                          "0": null,
                                                                          "1": null,
                                                                          "2": null,
                                                                          "3": null,
                                                                        },
                                                                      },
                                                                    ],
                                                                    selectable: true,
                                                                    sides: {
                                                                      "0": null,
                                                                      "1": null,
                                                                      "2": null,
                                                                      "3": null,
                                                                    },
                                                                  },
                                                                ],
                                                                sides: {
                                                                  "0": null,
                                                                  "1": null,
                                                                  "2": null,
                                                                  "3": null,
                                                                },
                                                              },
                                                              {
                                                                grtx: {
                                                                  "AD zone info01":
                                                                      "0",
                                                                  "AD zone info02":
                                                                      "MD",
                                                                  "AD zone info03":
                                                                      "$HAS_HC",
                                                                  "AD zone info04":
                                                                      "$HAS_DR",
                                                                  "AD zone info05":
                                                                      "$IS_DR_EXT",
                                                                  "AD zone info06":
                                                                      "$ZR_CNT_08",
                                                                },
                                                                index:
                                                                    "0.0.1.1.1.1.1.0.0.0.0.0.0.0.0.1",
                                                                divDir: "A",
                                                                linDiv: "1:1",
                                                                divElem: 0,
                                                                horDefType: "P",
                                                                top: null,
                                                                bottom: null,
                                                                divider:
                                                                    "$DS_WACA_ZR_ART_08",
                                                                children: [
                                                                  {
                                                                    index:
                                                                        "0.0.1.1.1.1.1.0.0.0.0.0.0.0.0.1.0",
                                                                    divDir: "V",
                                                                    linDiv: "",
                                                                    divElem: 0,
                                                                    horDefType:
                                                                        "P",
                                                                    top: null,
                                                                    bottom:
                                                                        null,
                                                                    divider:
                                                                        null,
                                                                    children:
                                                                        [],
                                                                    sides: {
                                                                      "0": null,
                                                                      "1": null,
                                                                      "2": null,
                                                                      "3": null,
                                                                    },
                                                                  },
                                                                  {
                                                                    index:
                                                                        "0.0.1.1.1.1.1.0.0.0.0.0.0.0.0.1.1",
                                                                    divDir: "V",
                                                                    linDiv: "",
                                                                    divElem: 0,
                                                                    horDefType:
                                                                        "P",
                                                                    top: null,
                                                                    bottom:
                                                                        null,
                                                                    divider:
                                                                        null,
                                                                    children:
                                                                        [],
                                                                    sides: {
                                                                      "0": null,
                                                                      "1": null,
                                                                      "2": null,
                                                                      "3": null,
                                                                    },
                                                                  },
                                                                ],
                                                                selectable: true,
                                                                sides: {
                                                                  "0": null,
                                                                  "1": null,
                                                                  "2": null,
                                                                  "3": null,
                                                                },
                                                              },
                                                            ],
                                                            sides: {
                                                              "0": null,
                                                              "1": null,
                                                              "2": null,
                                                              "3": null,
                                                            },
                                                          },
                                                          {
                                                            grtx: {
                                                              "AD zone info01":
                                                                  "0",
                                                              "AD zone info02":
                                                                  "MD",
                                                              "AD zone info03":
                                                                  "$HAS_HC",
                                                              "AD zone info04":
                                                                  "$HAS_DR",
                                                              "AD zone info05":
                                                                  "$IS_DR_EXT",
                                                              "AD zone info06":
                                                                  "$ZR_CNT_07",
                                                            },
                                                            index:
                                                                "0.0.1.1.1.1.1.0.0.0.0.0.0.0.1",
                                                            divDir: "A",
                                                            linDiv: "1:1",
                                                            divElem: 0,
                                                            horDefType: "P",
                                                            top: null,
                                                            bottom: null,
                                                            divider:
                                                                "$DS_WACA_ZR_ART_07",
                                                            children: [
                                                              {
                                                                index:
                                                                    "0.0.1.1.1.1.1.0.0.0.0.0.0.0.1.0",
                                                                divDir: "V",
                                                                linDiv: "",
                                                                divElem: 0,
                                                                horDefType: "P",
                                                                top: null,
                                                                bottom: null,
                                                                divider: null,
                                                                children: [],
                                                                sides: {
                                                                  "0": null,
                                                                  "1": null,
                                                                  "2": null,
                                                                  "3": null,
                                                                },
                                                              },
                                                              {
                                                                index:
                                                                    "0.0.1.1.1.1.1.0.0.0.0.0.0.0.1.1",
                                                                divDir: "V",
                                                                linDiv: "",
                                                                divElem: 0,
                                                                horDefType: "P",
                                                                top: null,
                                                                bottom: null,
                                                                divider: null,
                                                                children: [],
                                                                sides: {
                                                                  "0": null,
                                                                  "1": null,
                                                                  "2": null,
                                                                  "3": null,
                                                                },
                                                              },
                                                            ],
                                                            selectable: true,
                                                            sides: {
                                                              "0": null,
                                                              "1": null,
                                                              "2": null,
                                                              "3": null,
                                                            },
                                                          },
                                                        ],
                                                        sides: {
                                                          "0": null,
                                                          "1": null,
                                                          "2": null,
                                                          "3": null,
                                                        },
                                                      },
                                                      {
                                                        grtx: {
                                                          "AD zone info01": "0",
                                                          "AD zone info02":
                                                              "MD",
                                                          "AD zone info03":
                                                              "$HAS_HC",
                                                          "AD zone info04":
                                                              "$HAS_DR",
                                                          "AD zone info05":
                                                              "$IS_DR_EXT",
                                                          "AD zone info06":
                                                              "$ZR_CNT_06",
                                                        },
                                                        index:
                                                            "0.0.1.1.1.1.1.0.0.0.0.0.0.1",
                                                        divDir: "A",
                                                        linDiv: "1:1",
                                                        divElem: 0,
                                                        horDefType: "P",
                                                        top: null,
                                                        bottom: null,
                                                        divider:
                                                            "$DS_WACA_ZR_ART_06",
                                                        children: [
                                                          {
                                                            index:
                                                                "0.0.1.1.1.1.1.0.0.0.0.0.0.1.0",
                                                            divDir: "V",
                                                            linDiv: "",
                                                            divElem: 0,
                                                            horDefType: "P",
                                                            top: null,
                                                            bottom: null,
                                                            divider: null,
                                                            children: [],
                                                            sides: {
                                                              "0": null,
                                                              "1": null,
                                                              "2": null,
                                                              "3": null,
                                                            },
                                                          },
                                                          {
                                                            index:
                                                                "0.0.1.1.1.1.1.0.0.0.0.0.0.1.1",
                                                            divDir: "V",
                                                            linDiv: "",
                                                            divElem: 0,
                                                            horDefType: "P",
                                                            top: null,
                                                            bottom: null,
                                                            divider: null,
                                                            children: [],
                                                            sides: {
                                                              "0": null,
                                                              "1": null,
                                                              "2": null,
                                                              "3": null,
                                                            },
                                                          },
                                                        ],
                                                        selectable: true,
                                                        sides: {
                                                          "0": null,
                                                          "1": null,
                                                          "2": null,
                                                          "3": null,
                                                        },
                                                      },
                                                    ],
                                                    sides: {
                                                      "0": null,
                                                      "1": null,
                                                      "2": null,
                                                      "3": null,
                                                    },
                                                  },
                                                  {
                                                    grtx: {
                                                      "AD zone info01": "0",
                                                      "AD zone info02": "MD",
                                                      "AD zone info03":
                                                          "$HAS_HC",
                                                      "AD zone info04":
                                                          "$HAS_DR",
                                                      "AD zone info05":
                                                          "$IS_DR_EXT",
                                                      "AD zone info06":
                                                          "$ZR_CNT_05",
                                                    },
                                                    index:
                                                        "0.0.1.1.1.1.1.0.0.0.0.0.1",
                                                    divDir: "A",
                                                    linDiv: "1:1",
                                                    divElem: 0,
                                                    horDefType: "P",
                                                    top: null,
                                                    bottom: null,
                                                    divider:
                                                        "$DS_WACA_ZR_ART_05",
                                                    children: [
                                                      {
                                                        index:
                                                            "0.0.1.1.1.1.1.0.0.0.0.0.1.0",
                                                        divDir: "V",
                                                        linDiv: "",
                                                        divElem: 0,
                                                        horDefType: "P",
                                                        top: null,
                                                        bottom: null,
                                                        divider: null,
                                                        children: [],
                                                        sides: {
                                                          "0": null,
                                                          "1": null,
                                                          "2": null,
                                                          "3": null,
                                                        },
                                                      },
                                                      {
                                                        index:
                                                            "0.0.1.1.1.1.1.0.0.0.0.0.1.1",
                                                        divDir: "V",
                                                        linDiv: "",
                                                        divElem: 0,
                                                        horDefType: "P",
                                                        top: null,
                                                        bottom: null,
                                                        divider: null,
                                                        children: [],
                                                        sides: {
                                                          "0": null,
                                                          "1": null,
                                                          "2": null,
                                                          "3": null,
                                                        },
                                                      },
                                                    ],
                                                    selectable: true,
                                                    sides: {
                                                      "0": null,
                                                      "1": null,
                                                      "2": null,
                                                      "3": null,
                                                    },
                                                  },
                                                ],
                                                sides: {
                                                  "0": null,
                                                  "1": null,
                                                  "2": null,
                                                  "3": null,
                                                },
                                              },
                                              {
                                                grtx: {
                                                  "AD zone info01": "0",
                                                  "AD zone info02": "MD",
                                                  "AD zone info03": "$HAS_HC",
                                                  "AD zone info04": "$HAS_DR",
                                                  "AD zone info05":
                                                      "$IS_DR_EXT",
                                                  "AD zone info06":
                                                      "$ZR_CNT_04",
                                                },
                                                index:
                                                    "0.0.1.1.1.1.1.0.0.0.0.1",
                                                divDir: "A",
                                                linDiv: "1:1",
                                                divElem: 0,
                                                horDefType: "P",
                                                top: null,
                                                bottom: null,
                                                divider: "$DS_WACA_ZR_ART_04",
                                                children: [
                                                  {
                                                    index:
                                                        "0.0.1.1.1.1.1.0.0.0.0.1.0",
                                                    divDir: "V",
                                                    linDiv: "",
                                                    divElem: 0,
                                                    horDefType: "P",
                                                    top: null,
                                                    bottom: null,
                                                    divider: null,
                                                    children: [],
                                                    sides: {
                                                      "0": null,
                                                      "1": null,
                                                      "2": null,
                                                      "3": null,
                                                    },
                                                  },
                                                  {
                                                    index:
                                                        "0.0.1.1.1.1.1.0.0.0.0.1.1",
                                                    divDir: "V",
                                                    linDiv: "",
                                                    divElem: 0,
                                                    horDefType: "P",
                                                    top: null,
                                                    bottom: null,
                                                    divider: null,
                                                    children: [],
                                                    sides: {
                                                      "0": null,
                                                      "1": null,
                                                      "2": null,
                                                      "3": null,
                                                    },
                                                  },
                                                ],
                                                selectable: true,
                                                sides: {
                                                  "0": null,
                                                  "1": null,
                                                  "2": null,
                                                  "3": null,
                                                },
                                              },
                                            ],
                                            sides: {
                                              "0": null,
                                              "1": null,
                                              "2": null,
                                              "3": null,
                                            },
                                          },
                                          {
                                            grtx: {
                                              "AD zone info01": "0",
                                              "AD zone info02": "MD",
                                              "AD zone info03": "$HAS_HC",
                                              "AD zone info04": "$HAS_DR",
                                              "AD zone info05": "$IS_DR_EXT",
                                              "AD zone info06": "$ZR_CNT_03",
                                            },
                                            index: "0.0.1.1.1.1.1.0.0.0.1",
                                            divDir: "A",
                                            linDiv: "1:1",
                                            divElem: 0,
                                            horDefType: "P",
                                            top: null,
                                            bottom: null,
                                            divider: "$DS_WACA_ZR_ART_03",
                                            children: [
                                              {
                                                index:
                                                    "0.0.1.1.1.1.1.0.0.0.1.0",
                                                divDir: "V",
                                                linDiv: "",
                                                divElem: 0,
                                                horDefType: "P",
                                                top: null,
                                                bottom: null,
                                                divider: null,
                                                children: [],
                                                sides: {
                                                  "0": null,
                                                  "1": null,
                                                  "2": null,
                                                  "3": null,
                                                },
                                              },
                                              {
                                                index:
                                                    "0.0.1.1.1.1.1.0.0.0.1.1",
                                                divDir: "V",
                                                linDiv: "",
                                                divElem: 0,
                                                horDefType: "P",
                                                top: null,
                                                bottom: null,
                                                divider: null,
                                                children: [],
                                                sides: {
                                                  "0": null,
                                                  "1": null,
                                                  "2": null,
                                                  "3": null,
                                                },
                                              },
                                            ],
                                            selectable: true,
                                            sides: {
                                              "0": null,
                                              "1": null,
                                              "2": null,
                                              "3": null,
                                            },
                                          },
                                        ],
                                        sides: {
                                          "0": null,
                                          "1": null,
                                          "2": null,
                                          "3": null,
                                        },
                                      },
                                      {
                                        grtx: {
                                          "AD zone info01": "0",
                                          "AD zone info02": "MD",
                                          "AD zone info03": "$HAS_HC",
                                          "AD zone info04": "$HAS_DR",
                                          "AD zone info05": "$IS_DR_EXT",
                                          "AD zone info06": "$ZR_CNT_02",
                                        },
                                        index: "0.0.1.1.1.1.1.0.0.1",
                                        divDir: "A",
                                        linDiv: "1:1",
                                        divElem: 0,
                                        horDefType: "P",
                                        top: null,
                                        bottom: null,
                                        divider: "$DS_WACA_ZR_ART_02",
                                        children: [
                                          {
                                            index: "0.0.1.1.1.1.1.0.0.1.0",
                                            divDir: "V",
                                            linDiv: "",
                                            divElem: 0,
                                            horDefType: "P",
                                            top: null,
                                            bottom: null,
                                            divider: null,
                                            children: [],
                                            sides: {
                                              "0": null,
                                              "1": null,
                                              "2": null,
                                              "3": null,
                                            },
                                          },
                                          {
                                            index: "0.0.1.1.1.1.1.0.0.1.1",
                                            divDir: "V",
                                            linDiv: "",
                                            divElem: 0,
                                            horDefType: "P",
                                            top: null,
                                            bottom: null,
                                            divider: null,
                                            children: [],
                                            sides: {
                                              "0": null,
                                              "1": null,
                                              "2": null,
                                              "3": null,
                                            },
                                          },
                                        ],
                                        selectable: true,
                                        sides: {
                                          "0": null,
                                          "1": null,
                                          "2": null,
                                          "3": null,
                                        },
                                      },
                                      {
                                        index: "0.0.1.1.1.1.1.0.0.2",
                                        divDir: "V",
                                        linDiv: "",
                                        divElem: 0,
                                        horDefType: "P",
                                        top: null,
                                        bottom: null,
                                        divider: null,
                                        children: [],
                                        sides: {
                                          "0": null,
                                          "1": null,
                                          "2": null,
                                          "3": null,
                                        },
                                      },
                                      {
                                        index: "0.0.1.1.1.1.1.0.0.3",
                                        divDir: "V",
                                        linDiv: "",
                                        divElem: 0,
                                        horDefType: "P",
                                        top: null,
                                        bottom: null,
                                        divider: null,
                                        children: [],
                                        sides: {
                                          "0": null,
                                          "1": null,
                                          "2": null,
                                          "3": null,
                                        },
                                      },
                                      {
                                        index: "0.0.1.1.1.1.1.0.0.4",
                                        divDir: "V",
                                        linDiv: "",
                                        divElem: 0,
                                        horDefType: "P",
                                        top: null,
                                        bottom: null,
                                        divider: null,
                                        children: [],
                                        sides: {
                                          "0": null,
                                          "1": null,
                                          "2": null,
                                          "3": null,
                                        },
                                      },
                                    ],
                                    sides: {
                                      "0": null,
                                      "1": null,
                                      "2": null,
                                      "3": null,
                                    },
                                  },
                                  {
                                    grtx: {
                                      "AD zone info01": "$IS_RL_N",
                                      "AD zone info02": "CRMD",
                                      "AD zone info03": "$HAS_HC",
                                      "AD zone info04": "$HAS_DR",
                                      "AD zone info05": "$IS_DR_EXT",
                                      "AD zone info06": "$ZR_CNT_01",
                                    },
                                    index: "0.0.1.1.1.1.1.0.1",
                                    divDir: "A",
                                    linDiv: "1:1",
                                    divElem: 0,
                                    horDefType: "P",
                                    top: null,
                                    bottom: null,
                                    divider: "$DS_WACA_ZR_ART_01",
                                    children: [
                                      {
                                        index: "0.0.1.1.1.1.1.0.1.0",
                                        divDir: "V",
                                        linDiv: "",
                                        divElem: 0,
                                        horDefType: "P",
                                        top: null,
                                        bottom: null,
                                        divider: null,
                                        children: [],
                                        sides: {
                                          "0": null,
                                          "1": null,
                                          "2": null,
                                          "3": null,
                                        },
                                      },
                                      {
                                        index: "0.0.1.1.1.1.1.0.1.1",
                                        divDir: "V",
                                        linDiv: "",
                                        divElem: 0,
                                        horDefType: "P",
                                        top: null,
                                        bottom: null,
                                        divider: null,
                                        children: [],
                                        sides: {
                                          "0": null,
                                          "1": null,
                                          "2": null,
                                          "3": null,
                                        },
                                      },
                                    ],
                                    selectable: true,
                                    sides: {
                                      "0": null,
                                      "1": null,
                                      "2": null,
                                      "3": null,
                                    },
                                  },
                                  {
                                    index: "0.0.1.1.1.1.1.0.2",
                                    divDir: "V",
                                    linDiv: "",
                                    divElem: 0,
                                    horDefType: "P",
                                    top: "CP_1_TSI_1000_C1",
                                    bottom: null,
                                    divider: null,
                                    children: [],
                                    sides: {
                                      "0": null,
                                      "1": null,
                                      "2": null,
                                      "3": null,
                                    },
                                  },
                                  {
                                    index: "0.0.1.1.1.1.1.0.3",
                                    divDir: "V",
                                    linDiv: "",
                                    divElem: 0,
                                    horDefType: "P",
                                    top: "CP_1_TSI_1000_C1",
                                    bottom: null,
                                    divider: null,
                                    children: [],
                                    sides: {
                                      "0": null,
                                      "1": null,
                                      "2": null,
                                      "3": null,
                                    },
                                  },
                                  {
                                    index: "0.0.1.1.1.1.1.0.4",
                                    divDir: "V",
                                    linDiv: "",
                                    divElem: 0,
                                    horDefType: "P",
                                    top: "CP_1_TSI_1000_C1",
                                    bottom: null,
                                    divider: null,
                                    children: [],
                                    sides: {
                                      "0": null,
                                      "1": null,
                                      "2": null,
                                      "3": null,
                                    },
                                  },
                                  {
                                    index: "0.0.1.1.1.1.1.0.5",
                                    divDir: "V",
                                    linDiv: "",
                                    divElem: 0,
                                    horDefType: "P",
                                    top: null,
                                    bottom: null,
                                    divider: null,
                                    children: [],
                                    sides: {
                                      "0": null,
                                      "1": null,
                                      "2": null,
                                      "3": null,
                                    },
                                  },
                                  {
                                    index: "0.0.1.1.1.1.1.0.6",
                                    divDir: "V",
                                    linDiv: "",
                                    divElem: 0,
                                    horDefType: "P",
                                    top: null,
                                    bottom: null,
                                    divider: null,
                                    children: [],
                                    sides: {
                                      "0": null,
                                      "1": null,
                                      "2": null,
                                      "3": null,
                                    },
                                  },
                                ],
                                sides: {
                                  "0": null,
                                  "1": null,
                                  "2": null,
                                  "3": null,
                                },
                              },
                              {
                                index: "0.0.1.1.1.1.1.1",
                                divDir: "V",
                                linDiv: "",
                                divElem: 0,
                                horDefType: "P",
                                top: null,
                                bottom: null,
                                divider: null,
                                children: [],
                                sides: {
                                  "0": null,
                                  "1": null,
                                  "2": null,
                                  "3": null,
                                },
                              },
                            ],
                            sides: {
                              "0": null,
                              "1": null,
                              "2": null,
                              "3": null,
                            },
                          },
                        ],
                        sides: {
                          "0": null,
                          "1": null,
                          "2": null,
                          "3": null,
                        },
                      },
                      {
                        index: "0.0.1.1.1.2",
                        divDir: "H",
                        linDiv: "((round(2700/$ZR_STEP-0.5) ) *$ZR_STEP)mm:1",
                        divElem: 0,
                        horDefType: "D",
                        top: null,
                        bottom: null,
                        divider: null,
                        children: [
                          {
                            index: "0.0.1.1.1.2.0",
                            divDir: "V",
                            linDiv: "",
                            divElem: 0,
                            horDefType: "P",
                            top: null,
                            bottom: null,
                            divider: null,
                            children: [],
                            sides: {
                              "0": null,
                              "1": null,
                              "2": null,
                              "3": {
                                inSet: 0,
                                inSetFor: "",
                                partType: "S",
                                cpName: "CP_1_CM_0000",
                              },
                            },
                          },
                          {
                            index: "0.0.1.1.1.2.1",
                            divDir: "V",
                            linDiv: "",
                            divElem: 0,
                            horDefType: "P",
                            top: null,
                            bottom: null,
                            divider: null,
                            children: [],
                            sides: {
                              "0": null,
                              "1": null,
                              "2": null,
                              "3": {
                                inSet: 0,
                                inSetFor: "",
                                partType: "S",
                                cpName: "CP_1_CM_0000",
                              },
                            },
                          },
                        ],
                        sides: {
                          "0": null,
                          "1": null,
                          "2": null,
                          "3": null,
                        },
                      },
                    ],
                    clickable: "LEFT",
                    modifiable: true,
                    sides: {
                      "0": null,
                      "1": null,
                      "2": null,
                      "3": null,
                    },
                  },
                ],
                sides: {
                  "0": null,
                  "1": null,
                  "2": null,
                  "3": null,
                },
              },
              {
                index: "0.0.1.2",
                divDir: "V",
                linDiv: "",
                divElem: 0,
                horDefType: "P",
                top: null,
                bottom: null,
                divider: null,
                children: [],
                sides: {
                  "0": null,
                  "1": null,
                  "2": null,
                  "3": null,
                },
              },
            ],
            sides: {
              "0": null,
              "1": null,
              "2": null,
              "3": null,
            },
          },
        ],
        sides: {
          "0": null,
          "1": null,
          "2": null,
          "3": null,
        },
      },
      {
        index: "0.1",
        divDir: "H",
        linDiv: "$ZL_D mm : 1",
        divElem: 0,
        horDefType: "W",
        top: null,
        bottom: null,
        divider: null,
        children: [
          {
            index: "0.1.0",
            divDir: "H",
            linDiv: "1:($ZL_W + $IS_LL_P * $ZM_D)mm:((1-$IS_LL_P)*$ZM_D)mm",
            divElem: 0,
            horDefType: "D",
            top: null,
            bottom: null,
            divider: null,
            children: [
              {
                index: "0.1.0.0",
                divDir: "V",
                linDiv: "",
                divElem: 0,
                horDefType: "P",
                top: null,
                bottom: null,
                divider: null,
                children: [],
                sides: {
                  "0": null,
                  "1": null,
                  "2": null,
                  "3": null,
                },
              },
              {
                index: "0.1.0.1",
                divDir: "H",
                linDiv: "((1-$IS_BI_L)*$MAT_FI_1_THK) mm:1",
                divElem: 0,
                horDefType: "D",
                top: null,
                bottom: null,
                divider: null,
                children: [
                  {
                    index: "0.1.0.1.0",
                    divDir: "V",
                    linDiv: "",
                    divElem: 0,
                    horDefType: "P",
                    top: null,
                    bottom: null,
                    divider: null,
                    children: [],
                    sides: {
                      "0": {
                        inSet: 0,
                        inSetFor: "",
                        partType: "S",
                        cpName: "#DS_ZFL_SI",
                      },
                      "1": null,
                      "2": null,
                      "3": null,
                    },
                  },
                  {
                    index: "0.1.0.1.1",
                    divDir: "V",
                    linDiv: "$BASE_HEIGHT mm:1:$CROWN_HEIGHT mm",
                    divElem: 0,
                    horDefType: "D",
                    top: null,
                    bottom: null,
                    divider: null,
                    children: [
                      {
                        index: "0.1.0.1.1.0",
                        divDir: "H",
                        linDiv: "((round(2700/$ZL_STEP-0.5)) *$ZL_STEP)mm:1",
                        divElem: 0,
                        horDefType: "D",
                        top: null,
                        bottom: null,
                        divider: null,
                        children: [
                          {
                            index: "0.1.0.1.1.0.0",
                            divDir: "V",
                            linDiv: "",
                            divElem: 0,
                            horDefType: "P",
                            top: null,
                            bottom: null,
                            divider: null,
                            children: [],
                            sides: {
                              "0": null,
                              "1": {
                                inSet: 0,
                                inSetFor: "",
                                partType: "S",
                                cpName: "CP_1_BA_1000",
                              },
                              "2": null,
                              "3": null,
                            },
                          },
                          {
                            index: "0.1.0.1.1.0.1",
                            divDir: "V",
                            linDiv: "",
                            divElem: 0,
                            horDefType: "P",
                            top: null,
                            bottom: null,
                            divider: null,
                            children: [],
                            sides: {
                              "0": null,
                              "1": {
                                inSet: 0,
                                inSetFor: "",
                                partType: "S",
                                cpName: "CP_1_BA_1000",
                              },
                              "2": null,
                              "3": null,
                            },
                          },
                        ],
                        sides: {
                          "0": null,
                          "1": null,
                          "2": null,
                          "3": null,
                        },
                      },
                      {
                        index: "0.1.0.1.1.1",
                        divDir: "H",
                        linDiv: "($IS_BI_L*$ZFL_W) mm:1",
                        divElem: 0,
                        horDefType: "D",
                        top: null,
                        bottom: null,
                        divider: null,
                        children: [
                          {
                            index: "0.1.0.1.1.1.0",
                            divDir: "V",
                            linDiv: "",
                            divElem: 0,
                            horDefType: "P",
                            top: null,
                            bottom: null,
                            divider: null,
                            children: [],
                            sides: {
                              "0": null,
                              "1": {
                                inSet: -21.7,
                                inSetFor:
                                    "-$Front_Side_GAP-$MAT_FR_1_THK-2*$SRF_FR_1_THK",
                                partType: "S",
                                cpName: "#DS_ZFL_FR",
                              },
                              "2": null,
                              "3": null,
                            },
                          },
                          {
                            index: "0.1.0.1.1.1.1",
                            divDir: "H",
                            linDiv: "1:((1-$IS_LL_P) * 50)mm",
                            divElem: 0,
                            horDefType: "D",
                            top: null,
                            bottom: null,
                            divider: null,
                            children: [
                              {
                                index: "0.1.0.1.1.1.1.0",
                                divDir: "H",
                                linDiv: "#DS_LD_ZL_SZ_01",
                                divElem: 0,
                                horDefType: "D",
                                top: null,
                                bottom: null,
                                divider: null,
                                children: [
                                  {
                                    grtx: {
                                      "AD zone info01": "0",
                                      "AD zone info02": "MD",
                                      "AD zone info03": "$HAS_HC",
                                      "AD zone info04": "$HAS_DR",
                                      "AD zone info05": "$IS_DR_EXT",
                                      "AD zone info06": "$ZL_CNT_01",
                                    },
                                    index: "0.1.0.1.1.1.1.0.0",
                                    divDir: "A",
                                    linDiv: "1:1",
                                    divElem: 0,
                                    horDefType: "P",
                                    top: null,
                                    bottom: null,
                                    divider: "$DS_WACA_ZL_ART_01",
                                    children: [
                                      {
                                        index: "0.1.0.1.1.1.1.0.0.0",
                                        divDir: "V",
                                        linDiv: "",
                                        divElem: 0,
                                        horDefType: "P",
                                        top: null,
                                        bottom: null,
                                        divider: null,
                                        children: [],
                                        sides: {
                                          "0": null,
                                          "1": null,
                                          "2": null,
                                          "3": null,
                                        },
                                      },
                                      {
                                        index: "0.1.0.1.1.1.1.0.0.1",
                                        divDir: "V",
                                        linDiv: "",
                                        divElem: 0,
                                        horDefType: "P",
                                        top: null,
                                        bottom: null,
                                        divider: null,
                                        children: [],
                                        sides: {
                                          "0": null,
                                          "1": null,
                                          "2": null,
                                          "3": null,
                                        },
                                      },
                                    ],
                                    selectable: true,
                                    sides: {
                                      "0": null,
                                      "1": null,
                                      "2": null,
                                      "3": null,
                                    },
                                  },
                                  {
                                    index: "0.1.0.1.1.1.1.0.1",
                                    divDir: "H",
                                    linDiv: "#DS_LD_ZL_SZ_02",
                                    divElem: 0,
                                    horDefType: "D",
                                    top: null,
                                    bottom: null,
                                    divider: null,
                                    children: [
                                      {
                                        grtx: {
                                          "AD zone info01": "0",
                                          "AD zone info02": "MD",
                                          "AD zone info03": "$HAS_HC",
                                          "AD zone info04": "$HAS_DR",
                                          "AD zone info05": "$IS_DR_EXT",
                                          "AD zone info06": "$ZL_CNT_02",
                                        },
                                        index: "0.1.0.1.1.1.1.0.1.0",
                                        divDir: "A",
                                        linDiv: "1:1",
                                        divElem: 0,
                                        horDefType: "P",
                                        top: null,
                                        bottom: null,
                                        divider: "$DS_WACA_ZL_ART_02",
                                        children: [
                                          {
                                            index: "0.1.0.1.1.1.1.0.1.0.0",
                                            divDir: "V",
                                            linDiv: "",
                                            divElem: 0,
                                            horDefType: "P",
                                            top: null,
                                            bottom: null,
                                            divider: null,
                                            children: [],
                                            sides: {
                                              "0": null,
                                              "1": null,
                                              "2": null,
                                              "3": null,
                                            },
                                          },
                                          {
                                            index: "0.1.0.1.1.1.1.0.1.0.1",
                                            divDir: "V",
                                            linDiv: "",
                                            divElem: 0,
                                            horDefType: "P",
                                            top: null,
                                            bottom: null,
                                            divider: null,
                                            children: [],
                                            sides: {
                                              "0": null,
                                              "1": null,
                                              "2": null,
                                              "3": null,
                                            },
                                          },
                                        ],
                                        selectable: true,
                                        sides: {
                                          "0": null,
                                          "1": null,
                                          "2": null,
                                          "3": null,
                                        },
                                      },
                                      {
                                        index: "0.1.0.1.1.1.1.0.1.1",
                                        divDir: "H",
                                        linDiv: "#DS_LD_ZL_SZ_03",
                                        divElem: 0,
                                        horDefType: "D",
                                        top: null,
                                        bottom: null,
                                        divider: null,
                                        children: [
                                          {
                                            grtx: {
                                              "AD zone info01": "0",
                                              "AD zone info02": "MD",
                                              "AD zone info03": "$HAS_HC",
                                              "AD zone info04": "$HAS_DR",
                                              "AD zone info05": "$IS_DR_EXT",
                                              "AD zone info06": "$ZL_CNT_03",
                                            },
                                            index: "0.1.0.1.1.1.1.0.1.1.0",
                                            divDir: "A",
                                            linDiv: "1:1",
                                            divElem: 0,
                                            horDefType: "P",
                                            top: null,
                                            bottom: null,
                                            divider: "$DS_WACA_ZL_ART_03",
                                            children: [
                                              {
                                                index:
                                                    "0.1.0.1.1.1.1.0.1.1.0.0",
                                                divDir: "V",
                                                linDiv: "",
                                                divElem: 0,
                                                horDefType: "P",
                                                top: null,
                                                bottom: null,
                                                divider: null,
                                                children: [],
                                                sides: {
                                                  "0": null,
                                                  "1": null,
                                                  "2": null,
                                                  "3": null,
                                                },
                                              },
                                              {
                                                index:
                                                    "0.1.0.1.1.1.1.0.1.1.0.1",
                                                divDir: "V",
                                                linDiv: "",
                                                divElem: 0,
                                                horDefType: "P",
                                                top: null,
                                                bottom: null,
                                                divider: null,
                                                children: [],
                                                sides: {
                                                  "0": null,
                                                  "1": null,
                                                  "2": null,
                                                  "3": null,
                                                },
                                              },
                                            ],
                                            selectable: true,
                                            sides: {
                                              "0": null,
                                              "1": null,
                                              "2": null,
                                              "3": null,
                                            },
                                          },
                                          {
                                            index: "0.1.0.1.1.1.1.0.1.1.1",
                                            divDir: "H",
                                            linDiv: "#DS_LD_ZL_SZ_04",
                                            divElem: 0,
                                            horDefType: "D",
                                            top: null,
                                            bottom: null,
                                            divider: null,
                                            children: [
                                              {
                                                grtx: {
                                                  "AD zone info01": "0",
                                                  "AD zone info02": "MD",
                                                  "AD zone info03": "$HAS_HC",
                                                  "AD zone info04": "$HAS_DR",
                                                  "AD zone info05":
                                                      "$IS_DR_EXT",
                                                  "AD zone info06":
                                                      "$ZL_CNT_04",
                                                },
                                                index:
                                                    "0.1.0.1.1.1.1.0.1.1.1.0",
                                                divDir: "A",
                                                linDiv: "1:1",
                                                divElem: 0,
                                                horDefType: "P",
                                                top: null,
                                                bottom: null,
                                                divider: "$DS_WACA_ZL_ART_04",
                                                children: [
                                                  {
                                                    index:
                                                        "0.1.0.1.1.1.1.0.1.1.1.0.0",
                                                    divDir: "V",
                                                    linDiv: "",
                                                    divElem: 0,
                                                    horDefType: "P",
                                                    top: null,
                                                    bottom: null,
                                                    divider: null,
                                                    children: [],
                                                    sides: {
                                                      "0": null,
                                                      "1": null,
                                                      "2": null,
                                                      "3": null,
                                                    },
                                                  },
                                                  {
                                                    index:
                                                        "0.1.0.1.1.1.1.0.1.1.1.0.1",
                                                    divDir: "V",
                                                    linDiv: "",
                                                    divElem: 0,
                                                    horDefType: "P",
                                                    top: null,
                                                    bottom: null,
                                                    divider: null,
                                                    children: [],
                                                    sides: {
                                                      "0": null,
                                                      "1": null,
                                                      "2": null,
                                                      "3": null,
                                                    },
                                                  },
                                                ],
                                                selectable: true,
                                                sides: {
                                                  "0": null,
                                                  "1": null,
                                                  "2": null,
                                                  "3": null,
                                                },
                                              },
                                              {
                                                index:
                                                    "0.1.0.1.1.1.1.0.1.1.1.1",
                                                divDir: "H",
                                                linDiv: "#DS_LD_ZL_SZ_05",
                                                divElem: 0,
                                                horDefType: "D",
                                                top: null,
                                                bottom: null,
                                                divider: null,
                                                children: [
                                                  {
                                                    grtx: {
                                                      "AD zone info01": "0",
                                                      "AD zone info02": "MD",
                                                      "AD zone info03":
                                                          "$HAS_HC",
                                                      "AD zone info04":
                                                          "$HAS_DR",
                                                      "AD zone info05":
                                                          "$IS_DR_EXT",
                                                      "AD zone info06":
                                                          "$ZL_CNT_05",
                                                    },
                                                    index:
                                                        "0.1.0.1.1.1.1.0.1.1.1.1.0",
                                                    divDir: "A",
                                                    linDiv: "1:1",
                                                    divElem: 0,
                                                    horDefType: "P",
                                                    top: null,
                                                    bottom: null,
                                                    divider:
                                                        "$DS_WACA_ZL_ART_05",
                                                    children: [
                                                      {
                                                        index:
                                                            "0.1.0.1.1.1.1.0.1.1.1.1.0.0",
                                                        divDir: "V",
                                                        linDiv: "",
                                                        divElem: 0,
                                                        horDefType: "P",
                                                        top: null,
                                                        bottom: null,
                                                        divider: null,
                                                        children: [],
                                                        sides: {
                                                          "0": null,
                                                          "1": null,
                                                          "2": null,
                                                          "3": null,
                                                        },
                                                      },
                                                      {
                                                        index:
                                                            "0.1.0.1.1.1.1.0.1.1.1.1.0.1",
                                                        divDir: "V",
                                                        linDiv: "",
                                                        divElem: 0,
                                                        horDefType: "P",
                                                        top: null,
                                                        bottom: null,
                                                        divider: null,
                                                        children: [],
                                                        sides: {
                                                          "0": null,
                                                          "1": null,
                                                          "2": null,
                                                          "3": null,
                                                        },
                                                      },
                                                    ],
                                                    selectable: true,
                                                    sides: {
                                                      "0": null,
                                                      "1": null,
                                                      "2": null,
                                                      "3": null,
                                                    },
                                                  },
                                                  {
                                                    index:
                                                        "0.1.0.1.1.1.1.0.1.1.1.1.1",
                                                    divDir: "H",
                                                    linDiv: "#DS_LD_ZL_SZ_06",
                                                    divElem: 0,
                                                    horDefType: "D",
                                                    top: null,
                                                    bottom: null,
                                                    divider: null,
                                                    children: [
                                                      {
                                                        grtx: {
                                                          "AD zone info01": "0",
                                                          "AD zone info02":
                                                              "MD",
                                                          "AD zone info03":
                                                              "$HAS_HC",
                                                          "AD zone info04":
                                                              "$HAS_DR",
                                                          "AD zone info05":
                                                              "$IS_DR_EXT",
                                                          "AD zone info06":
                                                              "$ZL_CNT_06",
                                                        },
                                                        index:
                                                            "0.1.0.1.1.1.1.0.1.1.1.1.1.0",
                                                        divDir: "A",
                                                        linDiv: "1:1",
                                                        divElem: 0,
                                                        horDefType: "P",
                                                        top: null,
                                                        bottom: null,
                                                        divider:
                                                            "$DS_WACA_ZL_ART_06",
                                                        children: [
                                                          {
                                                            index:
                                                                "0.1.0.1.1.1.1.0.1.1.1.1.1.0.0",
                                                            divDir: "V",
                                                            linDiv: "",
                                                            divElem: 0,
                                                            horDefType: "P",
                                                            top: null,
                                                            bottom: null,
                                                            divider: null,
                                                            children: [],
                                                            sides: {
                                                              "0": null,
                                                              "1": null,
                                                              "2": null,
                                                              "3": null,
                                                            },
                                                          },
                                                          {
                                                            index:
                                                                "0.1.0.1.1.1.1.0.1.1.1.1.1.0.1",
                                                            divDir: "V",
                                                            linDiv: "",
                                                            divElem: 0,
                                                            horDefType: "P",
                                                            top: null,
                                                            bottom: null,
                                                            divider: null,
                                                            children: [],
                                                            sides: {
                                                              "0": null,
                                                              "1": null,
                                                              "2": null,
                                                              "3": null,
                                                            },
                                                          },
                                                        ],
                                                        selectable: true,
                                                        sides: {
                                                          "0": null,
                                                          "1": null,
                                                          "2": null,
                                                          "3": null,
                                                        },
                                                      },
                                                      {
                                                        index:
                                                            "0.1.0.1.1.1.1.0.1.1.1.1.1.1",
                                                        divDir: "H",
                                                        linDiv:
                                                            "#DS_LD_ZL_SZ_07",
                                                        divElem: 0,
                                                        horDefType: "D",
                                                        top: null,
                                                        bottom: null,
                                                        divider: null,
                                                        children: [
                                                          {
                                                            grtx: {
                                                              "AD zone info01":
                                                                  "0",
                                                              "AD zone info02":
                                                                  "MD",
                                                              "AD zone info03":
                                                                  "$HAS_HC",
                                                              "AD zone info04":
                                                                  "$HAS_DR",
                                                              "AD zone info05":
                                                                  "$IS_DR_EXT",
                                                              "AD zone info06":
                                                                  "$ZL_CNT_07",
                                                            },
                                                            index:
                                                                "0.1.0.1.1.1.1.0.1.1.1.1.1.1.0",
                                                            divDir: "A",
                                                            linDiv: "1:1",
                                                            divElem: 0,
                                                            horDefType: "P",
                                                            top: null,
                                                            bottom: null,
                                                            divider:
                                                                "$DS_WACA_ZL_ART_07",
                                                            children: [
                                                              {
                                                                index:
                                                                    "0.1.0.1.1.1.1.0.1.1.1.1.1.1.0.0",
                                                                divDir: "V",
                                                                linDiv: "",
                                                                divElem: 0,
                                                                horDefType: "P",
                                                                top: null,
                                                                bottom: null,
                                                                divider: null,
                                                                children: [],
                                                                sides: {
                                                                  "0": null,
                                                                  "1": null,
                                                                  "2": null,
                                                                  "3": null,
                                                                },
                                                              },
                                                              {
                                                                index:
                                                                    "0.1.0.1.1.1.1.0.1.1.1.1.1.1.0.1",
                                                                divDir: "V",
                                                                linDiv: "",
                                                                divElem: 0,
                                                                horDefType: "P",
                                                                top: null,
                                                                bottom: null,
                                                                divider: null,
                                                                children: [],
                                                                sides: {
                                                                  "0": null,
                                                                  "1": null,
                                                                  "2": null,
                                                                  "3": null,
                                                                },
                                                              },
                                                            ],
                                                            selectable: true,
                                                            sides: {
                                                              "0": null,
                                                              "1": null,
                                                              "2": null,
                                                              "3": null,
                                                            },
                                                          },
                                                          {
                                                            index:
                                                                "0.1.0.1.1.1.1.0.1.1.1.1.1.1.1",
                                                            divDir: "H",
                                                            linDiv:
                                                                "#DS_LD_ZL_SZ_08",
                                                            divElem: 0,
                                                            horDefType: "D",
                                                            top: null,
                                                            bottom: null,
                                                            divider: null,
                                                            children: [
                                                              {
                                                                grtx: {
                                                                  "AD zone info01":
                                                                      "0",
                                                                  "AD zone info02":
                                                                      "MD",
                                                                  "AD zone info03":
                                                                      "$HAS_HC",
                                                                  "AD zone info04":
                                                                      "$HAS_DR",
                                                                  "AD zone info05":
                                                                      "$IS_DR_EXT",
                                                                  "AD zone info06":
                                                                      "$ZL_CNT_08",
                                                                },
                                                                index:
                                                                    "0.1.0.1.1.1.1.0.1.1.1.1.1.1.1.0",
                                                                divDir: "A",
                                                                linDiv: "1:1",
                                                                divElem: 0,
                                                                horDefType: "P",
                                                                top: null,
                                                                bottom: null,
                                                                divider:
                                                                    "$DS_WACA_ZL_ART_08",
                                                                children: [
                                                                  {
                                                                    index:
                                                                        "0.1.0.1.1.1.1.0.1.1.1.1.1.1.1.0.0",
                                                                    divDir: "V",
                                                                    linDiv: "",
                                                                    divElem: 0,
                                                                    horDefType:
                                                                        "P",
                                                                    top: null,
                                                                    bottom:
                                                                        null,
                                                                    divider:
                                                                        null,
                                                                    children:
                                                                        [],
                                                                    sides: {
                                                                      "0": null,
                                                                      "1": null,
                                                                      "2": null,
                                                                      "3": null,
                                                                    },
                                                                  },
                                                                  {
                                                                    index:
                                                                        "0.1.0.1.1.1.1.0.1.1.1.1.1.1.1.0.1",
                                                                    divDir: "V",
                                                                    linDiv: "",
                                                                    divElem: 0,
                                                                    horDefType:
                                                                        "P",
                                                                    top: null,
                                                                    bottom:
                                                                        null,
                                                                    divider:
                                                                        null,
                                                                    children:
                                                                        [],
                                                                    sides: {
                                                                      "0": null,
                                                                      "1": null,
                                                                      "2": null,
                                                                      "3": null,
                                                                    },
                                                                  },
                                                                ],
                                                                selectable: true,
                                                                sides: {
                                                                  "0": null,
                                                                  "1": null,
                                                                  "2": null,
                                                                  "3": null,
                                                                },
                                                              },
                                                              {
                                                                index:
                                                                    "0.1.0.1.1.1.1.0.1.1.1.1.1.1.1.1",
                                                                divDir: "H",
                                                                linDiv:
                                                                    "#DS_LD_ZL_SZ_09",
                                                                divElem: 0,
                                                                horDefType: "D",
                                                                top: null,
                                                                bottom: null,
                                                                divider: null,
                                                                children: [
                                                                  {
                                                                    grtx: {
                                                                      "AD zone info01":
                                                                          "0",
                                                                      "AD zone info02":
                                                                          "MD",
                                                                      "AD zone info03":
                                                                          "$HAS_HC",
                                                                      "AD zone info04":
                                                                          "$HAS_DR",
                                                                      "AD zone info05":
                                                                          "$IS_DR_EXT",
                                                                      "AD zone info06":
                                                                          "$ZL_CNT_09",
                                                                    },
                                                                    index:
                                                                        "0.1.0.1.1.1.1.0.1.1.1.1.1.1.1.1.0",
                                                                    divDir: "A",
                                                                    linDiv:
                                                                        "1:1",
                                                                    divElem: 0,
                                                                    horDefType:
                                                                        "P",
                                                                    top: null,
                                                                    bottom:
                                                                        null,
                                                                    divider:
                                                                        "$DS_WACA_ZL_ART_09",
                                                                    children: [
                                                                      {
                                                                        index:
                                                                            "0.1.0.1.1.1.1.0.1.1.1.1.1.1.1.1.0.0",
                                                                        divDir:
                                                                            "V",
                                                                        linDiv:
                                                                            "",
                                                                        divElem: 0,
                                                                        horDefType:
                                                                            "P",
                                                                        top: null,
                                                                        bottom:
                                                                            null,
                                                                        divider:
                                                                            null,
                                                                        children:
                                                                            [],
                                                                        sides: {
                                                                          "0": null,
                                                                          "1": null,
                                                                          "2": null,
                                                                          "3": null,
                                                                        },
                                                                      },
                                                                      {
                                                                        index:
                                                                            "0.1.0.1.1.1.1.0.1.1.1.1.1.1.1.1.0.1",
                                                                        divDir:
                                                                            "V",
                                                                        linDiv:
                                                                            "",
                                                                        divElem: 0,
                                                                        horDefType:
                                                                            "P",
                                                                        top: null,
                                                                        bottom:
                                                                            null,
                                                                        divider:
                                                                            null,
                                                                        children:
                                                                            [],
                                                                        sides: {
                                                                          "0": null,
                                                                          "1": null,
                                                                          "2": null,
                                                                          "3": null,
                                                                        },
                                                                      },
                                                                    ],
                                                                    selectable: true,
                                                                    sides: {
                                                                      "0": null,
                                                                      "1": null,
                                                                      "2": null,
                                                                      "3": null,
                                                                    },
                                                                  },
                                                                  {
                                                                    index:
                                                                        "0.1.0.1.1.1.1.0.1.1.1.1.1.1.1.1.1",
                                                                    divDir: "H",
                                                                    linDiv:
                                                                        "#DS_LD_ZL_SZ_10",
                                                                    divElem: 0,
                                                                    horDefType:
                                                                        "D",
                                                                    top: null,
                                                                    bottom:
                                                                        null,
                                                                    divider:
                                                                        null,
                                                                    children: [
                                                                      {
                                                                        grtx: {
                                                                          "AD zone info01":
                                                                              "0",
                                                                          "AD zone info02":
                                                                              "MD",
                                                                          "AD zone info03":
                                                                              "$HAS_HC",
                                                                          "AD zone info04":
                                                                              "$HAS_DR",
                                                                          "AD zone info05":
                                                                              "$IS_DR_EXT",
                                                                          "AD zone info06":
                                                                              "$ZL_CNT_10",
                                                                        },
                                                                        index:
                                                                            "0.1.0.1.1.1.1.0.1.1.1.1.1.1.1.1.1.0",
                                                                        divDir:
                                                                            "A",
                                                                        linDiv:
                                                                            "1:1",
                                                                        divElem: 0,
                                                                        horDefType:
                                                                            "P",
                                                                        top: null,
                                                                        bottom:
                                                                            null,
                                                                        divider:
                                                                            "$DS_WACA_ZL_ART_10",
                                                                        children:
                                                                            [
                                                                              {
                                                                                index:
                                                                                    "0.1.0.1.1.1.1.0.1.1.1.1.1.1.1.1.1.0.0",
                                                                                divDir:
                                                                                    "V",
                                                                                linDiv:
                                                                                    "",
                                                                                divElem: 0,
                                                                                horDefType:
                                                                                    "P",
                                                                                top: null,
                                                                                bottom:
                                                                                    null,
                                                                                divider:
                                                                                    null,
                                                                                children:
                                                                                    [],
                                                                                sides:
                                                                                    {
                                                                                      "0": null,
                                                                                      "1": null,
                                                                                      "2": null,
                                                                                      "3": null,
                                                                                    },
                                                                              },
                                                                              {
                                                                                index:
                                                                                    "0.1.0.1.1.1.1.0.1.1.1.1.1.1.1.1.1.0.1",
                                                                                divDir:
                                                                                    "V",
                                                                                linDiv:
                                                                                    "",
                                                                                divElem: 0,
                                                                                horDefType:
                                                                                    "P",
                                                                                top: null,
                                                                                bottom:
                                                                                    null,
                                                                                divider:
                                                                                    null,
                                                                                children:
                                                                                    [],
                                                                                sides:
                                                                                    {
                                                                                      "0": null,
                                                                                      "1": null,
                                                                                      "2": null,
                                                                                      "3": null,
                                                                                    },
                                                                              },
                                                                            ],
                                                                        selectable: true,
                                                                        sides: {
                                                                          "0": null,
                                                                          "1": null,
                                                                          "2": null,
                                                                          "3": null,
                                                                        },
                                                                      },
                                                                      {
                                                                        index:
                                                                            "0.1.0.1.1.1.1.0.1.1.1.1.1.1.1.1.1.1",
                                                                        divDir:
                                                                            "H",
                                                                        linDiv:
                                                                            "#DS_LD_ZL_SZ_11",
                                                                        divElem: 0,
                                                                        horDefType:
                                                                            "D",
                                                                        top: null,
                                                                        bottom:
                                                                            null,
                                                                        divider:
                                                                            null,
                                                                        children:
                                                                            [
                                                                              {
                                                                                index:
                                                                                    "0.1.0.1.1.1.1.0.1.1.1.1.1.1.1.1.1.1.0",
                                                                                divDir:
                                                                                    "V",
                                                                                linDiv:
                                                                                    "",
                                                                                divElem: 0,
                                                                                horDefType:
                                                                                    "P",
                                                                                top: null,
                                                                                bottom:
                                                                                    null,
                                                                                divider:
                                                                                    null,
                                                                                children:
                                                                                    [],
                                                                                sides:
                                                                                    {
                                                                                      "0": null,
                                                                                      "1": null,
                                                                                      "2": null,
                                                                                      "3": null,
                                                                                    },
                                                                              },
                                                                              {
                                                                                index:
                                                                                    "0.1.0.1.1.1.1.0.1.1.1.1.1.1.1.1.1.1.1",
                                                                                divDir:
                                                                                    "V",
                                                                                linDiv:
                                                                                    "",
                                                                                divElem: 0,
                                                                                horDefType:
                                                                                    "P",
                                                                                top: null,
                                                                                bottom:
                                                                                    null,
                                                                                divider:
                                                                                    null,
                                                                                children:
                                                                                    [],
                                                                                sides:
                                                                                    {
                                                                                      "0": null,
                                                                                      "1": null,
                                                                                      "2": null,
                                                                                      "3": null,
                                                                                    },
                                                                              },
                                                                            ],
                                                                        sides: {
                                                                          "0": null,
                                                                          "1": null,
                                                                          "2": null,
                                                                          "3": null,
                                                                        },
                                                                      },
                                                                    ],
                                                                    sides: {
                                                                      "0": null,
                                                                      "1": null,
                                                                      "2": null,
                                                                      "3": null,
                                                                    },
                                                                  },
                                                                ],
                                                                sides: {
                                                                  "0": null,
                                                                  "1": null,
                                                                  "2": null,
                                                                  "3": null,
                                                                },
                                                              },
                                                            ],
                                                            sides: {
                                                              "0": null,
                                                              "1": null,
                                                              "2": null,
                                                              "3": null,
                                                            },
                                                          },
                                                        ],
                                                        sides: {
                                                          "0": null,
                                                          "1": null,
                                                          "2": null,
                                                          "3": null,
                                                        },
                                                      },
                                                    ],
                                                    sides: {
                                                      "0": null,
                                                      "1": null,
                                                      "2": null,
                                                      "3": null,
                                                    },
                                                  },
                                                ],
                                                sides: {
                                                  "0": null,
                                                  "1": null,
                                                  "2": null,
                                                  "3": null,
                                                },
                                              },
                                            ],
                                            sides: {
                                              "0": null,
                                              "1": null,
                                              "2": null,
                                              "3": null,
                                            },
                                          },
                                        ],
                                        sides: {
                                          "0": null,
                                          "1": null,
                                          "2": null,
                                          "3": null,
                                        },
                                      },
                                      {
                                        index: "0.1.0.1.1.1.1.0.1.2",
                                        divDir: "V",
                                        linDiv: "",
                                        divElem: 0,
                                        horDefType: "P",
                                        top: null,
                                        bottom: null,
                                        divider: null,
                                        children: [],
                                        sides: {
                                          "0": null,
                                          "1": null,
                                          "2": null,
                                          "3": null,
                                        },
                                      },
                                      {
                                        index: "0.1.0.1.1.1.1.0.1.3",
                                        divDir: "V",
                                        linDiv: "",
                                        divElem: 0,
                                        horDefType: "P",
                                        top: null,
                                        bottom: null,
                                        divider: null,
                                        children: [],
                                        sides: {
                                          "0": null,
                                          "1": null,
                                          "2": null,
                                          "3": null,
                                        },
                                      },
                                      {
                                        index: "0.1.0.1.1.1.1.0.1.4",
                                        divDir: "V",
                                        linDiv: "",
                                        divElem: 0,
                                        horDefType: "P",
                                        top: null,
                                        bottom: null,
                                        divider: null,
                                        children: [],
                                        sides: {
                                          "0": null,
                                          "1": null,
                                          "2": null,
                                          "3": null,
                                        },
                                      },
                                    ],
                                    sides: {
                                      "0": null,
                                      "1": null,
                                      "2": null,
                                      "3": null,
                                    },
                                  },
                                  {
                                    grtx: {
                                      "AD zone info01": "$IS_LL_P",
                                      "AD zone info02": "CL",
                                      "AD zone info03": "$HAS_HC",
                                      "AD zone info04": "$HAS_DR",
                                      "AD zone info05": "$IS_DR_EXT",
                                      "AD zone info06": "$ZL_CNT_99",
                                    },
                                    index: "0.1.0.1.1.1.1.0.2",
                                    divDir: "V",
                                    linDiv: "",
                                    divElem: 0,
                                    horDefType: "P",
                                    top: "CP_1_TSI_1000_C1",
                                    bottom: null,
                                    divider: null,
                                    children: [],
                                    selectable: true,
                                    sides: {
                                      "0": null,
                                      "1": null,
                                      "2": null,
                                      "3": null,
                                    },
                                  },
                                  {
                                    index: "0.1.0.1.1.1.1.0.3",
                                    divDir: "V",
                                    linDiv: "",
                                    divElem: 0,
                                    horDefType: "P",
                                    top: "CP_1_TSI_1000_C1",
                                    bottom: null,
                                    divider: null,
                                    children: [],
                                    sides: {
                                      "0": null,
                                      "1": null,
                                      "2": null,
                                      "3": null,
                                    },
                                  },
                                  {
                                    index: "0.1.0.1.1.1.1.0.4",
                                    divDir: "V",
                                    linDiv: "",
                                    divElem: 0,
                                    horDefType: "P",
                                    top: "CP_1_TSI_1000_C1",
                                    bottom: null,
                                    divider: null,
                                    children: [],
                                    sides: {
                                      "0": null,
                                      "1": null,
                                      "2": null,
                                      "3": null,
                                    },
                                  },
                                  {
                                    index: "0.1.0.1.1.1.1.0.5",
                                    divDir: "V",
                                    linDiv: "",
                                    divElem: 0,
                                    horDefType: "P",
                                    top: null,
                                    bottom: null,
                                    divider: null,
                                    children: [],
                                    sides: {
                                      "0": null,
                                      "1": null,
                                      "2": null,
                                      "3": null,
                                    },
                                  },
                                  {
                                    index: "0.1.0.1.1.1.1.0.6",
                                    divDir: "V",
                                    linDiv: "",
                                    divElem: 0,
                                    horDefType: "P",
                                    top: null,
                                    bottom: null,
                                    divider: null,
                                    children: [],
                                    sides: {
                                      "0": null,
                                      "1": null,
                                      "2": null,
                                      "3": null,
                                    },
                                  },
                                ],
                                sides: {
                                  "0": null,
                                  "1": null,
                                  "2": null,
                                  "3": null,
                                },
                              },
                              {
                                index: "0.1.0.1.1.1.1.1",
                                divDir: "V",
                                linDiv: "",
                                divElem: 0,
                                horDefType: "P",
                                top: null,
                                bottom: null,
                                divider: null,
                                children: [],
                                sides: {
                                  "0": null,
                                  "1": null,
                                  "2": null,
                                  "3": null,
                                },
                              },
                            ],
                            sides: {
                              "0": null,
                              "1": null,
                              "2": null,
                              "3": null,
                            },
                          },
                        ],
                        sides: {
                          "0": null,
                          "1": null,
                          "2": null,
                          "3": null,
                        },
                      },
                      {
                        index: "0.1.0.1.1.2",
                        divDir: "H",
                        linDiv: "((round(2700/$ZL_STEP-0.5))*$ZL_STEP)mm:1",
                        divElem: 0,
                        horDefType: "D",
                        top: null,
                        bottom: null,
                        divider: null,
                        children: [
                          {
                            index: "0.1.0.1.1.2.0",
                            divDir: "V",
                            linDiv: "",
                            divElem: 0,
                            horDefType: "P",
                            top: null,
                            bottom: null,
                            divider: null,
                            children: [],
                            sides: {
                              "0": null,
                              "1": {
                                inSet: 0,
                                inSetFor: "",
                                partType: "S",
                                cpName: "CP_1_CM_0000",
                              },
                              "2": null,
                              "3": null,
                            },
                          },
                          {
                            index: "0.1.0.1.1.2.1",
                            divDir: "V",
                            linDiv: "",
                            divElem: 0,
                            horDefType: "P",
                            top: null,
                            bottom: null,
                            divider: null,
                            children: [],
                            sides: {
                              "0": null,
                              "1": {
                                inSet: 0,
                                inSetFor: "",
                                partType: "S",
                                cpName: "CP_1_CM_0000",
                              },
                              "2": null,
                              "3": null,
                            },
                          },
                        ],
                        sides: {
                          "0": null,
                          "1": null,
                          "2": null,
                          "3": null,
                        },
                      },
                    ],
                    clickable: "RIGHT",
                    modifiable: true,
                    sides: {
                      "0": null,
                      "1": null,
                      "2": null,
                      "3": null,
                    },
                  },
                ],
                sides: {
                  "0": null,
                  "1": null,
                  "2": null,
                  "3": null,
                },
              },
              {
                index: "0.1.0.2",
                divDir: "V",
                linDiv: "",
                divElem: 0,
                horDefType: "P",
                top: null,
                bottom: null,
                divider: null,
                children: [],
                sides: {
                  "0": null,
                  "1": null,
                  "2": null,
                  "3": null,
                },
              },
            ],
            sides: {
              "0": null,
              "1": null,
              "2": null,
              "3": null,
            },
          },
          {
            index: "0.1.1",
            divDir: "V",
            linDiv: "",
            divElem: 0,
            horDefType: "P",
            top: null,
            bottom: null,
            divider: null,
            children: [],
            empty: true,
            sides: {
              "0": null,
              "1": null,
              "2": null,
              "3": null,
            },
          },
        ],
        sides: {
          "0": null,
          "1": null,
          "2": null,
          "3": null,
        },
      },
      {
        index: "0.2",
        divDir: "H",
        linDiv: "1:$ZM_D mm",
        divElem: 3,
        horDefType: "D",
        top: null,
        bottom: null,
        divider: null,
        children: [
          {
            index: "0.2.0",
            divDir: "V",
            linDiv: "",
            divElem: 0,
            horDefType: "P",
            top: null,
            bottom: null,
            divider: null,
            children: [],
            empty: true,
            sides: {
              "0": null,
              "1": null,
              "2": null,
              "3": null,
            },
          },
          {
            index: "0.2.1",
            divDir: "H",
            linDiv: "((1-$IS_ML_N)*$ZL_D)mm :1:((1-$IS_ML_P)*$ZR_D)mm",
            divElem: 1,
            horDefType: "W",
            top: null,
            bottom: null,
            divider: null,
            children: [
              {
                index: "0.2.1.0",
                divDir: "V",
                linDiv: "",
                divElem: 0,
                horDefType: "P",
                top: null,
                bottom: null,
                divider: null,
                children: [],
                sides: {
                  "0": null,
                  "1": null,
                  "2": null,
                  "3": null,
                },
              },
              {
                index: "0.2.1.1",
                divDir: "V",
                linDiv: "$BASE_HEIGHT mm:1:$CROWN_HEIGHT mm",
                divElem: 0,
                horDefType: "W",
                top: null,
                bottom: null,
                divider: null,
                children: [
                  {
                    index: "0.2.1.1.0",
                    divDir: "H",
                    linDiv: "((round(2700/$ZM_STEP-0.5)) *$ZM_STEP)mm:1",
                    divElem: 0,
                    horDefType: "W",
                    top: null,
                    bottom: null,
                    divider: null,
                    children: [
                      {
                        index: "0.2.1.1.0.0",
                        divDir: "V",
                        linDiv: "",
                        divElem: 0,
                        horDefType: "P",
                        top: null,
                        bottom: null,
                        divider: null,
                        children: [],
                        sides: {
                          "0": {
                            inSet: 0,
                            inSetFor: "",
                            partType: "S",
                            cpName: "CP_1_BA_1000",
                          },
                          "1": null,
                          "2": null,
                          "3": null,
                        },
                      },
                      {
                        index: "0.2.1.1.0.1",
                        divDir: "V",
                        linDiv: "",
                        divElem: 0,
                        horDefType: "P",
                        top: null,
                        bottom: null,
                        divider: null,
                        children: [],
                        sides: {
                          "0": {
                            inSet: 0,
                            inSetFor: "",
                            partType: "S",
                            cpName: "CP_1_BA_1000",
                          },
                          "1": null,
                          "2": null,
                          "3": null,
                        },
                      },
                    ],
                    sides: {
                      "0": null,
                      "1": null,
                      "2": null,
                      "3": null,
                    },
                  },
                  {
                    index: "0.2.1.1.1",
                    divDir: "H",
                    linDiv: "((1-$IS_ML_N) * 50)mm:1:((1-$IS_ML_P) * 50)mm",
                    divElem: 0,
                    horDefType: "W",
                    top: null,
                    bottom: null,
                    divider: null,
                    children: [
                      {
                        index: "0.2.1.1.1.0",
                        divDir: "V",
                        linDiv: "",
                        divElem: 0,
                        horDefType: "P",
                        top: null,
                        bottom: null,
                        divider: null,
                        children: [],
                        sides: {
                          "0": null,
                          "1": null,
                          "2": null,
                          "3": null,
                        },
                      },
                      {
                        index: "0.2.1.1.1.1",
                        divDir: "H",
                        linDiv: "#DS_LD_ZM_SZ_01",
                        divElem: 0,
                        horDefType: "W",
                        top: null,
                        bottom: null,
                        divider: null,
                        children: [
                          {
                            grtx: {
                              "AD zone info01": "$IS_ML_N",
                              "AD zone info02": "CRMD",
                              "AD zone info03": "$HAS_HC",
                              "AD zone info04": "$HAS_DR",
                              "AD zone info05": "$IS_DR_EXT",
                              "AD zone info06": "$ZM_CNT_01",
                            },
                            index: "0.2.1.1.1.1.0",
                            divDir: "A",
                            linDiv: "1:1",
                            divElem: 0,
                            horDefType: "P",
                            top: null,
                            bottom: null,
                            divider: "$DS_WACA_ZM_ART_01",
                            children: [
                              {
                                index: "0.2.1.1.1.1.0.0",
                                divDir: "V",
                                linDiv: "",
                                divElem: 0,
                                horDefType: "P",
                                top: null,
                                bottom: null,
                                divider: null,
                                children: [],
                                sides: {
                                  "0": null,
                                  "1": null,
                                  "2": null,
                                  "3": null,
                                },
                              },
                              {
                                index: "0.2.1.1.1.1.0.1",
                                divDir: "V",
                                linDiv: "",
                                divElem: 0,
                                horDefType: "P",
                                top: null,
                                bottom: null,
                                divider: null,
                                children: [],
                                sides: {
                                  "0": null,
                                  "1": null,
                                  "2": null,
                                  "3": null,
                                },
                              },
                            ],
                            selectable: true,
                            sides: {
                              "0": null,
                              "1": null,
                              "2": null,
                              "3": null,
                            },
                          },
                          {
                            index: "0.2.1.1.1.1.1",
                            divDir: "H",
                            linDiv: "#DS_LD_ZM_SZ_02",
                            divElem: 0,
                            horDefType: "W",
                            top: null,
                            bottom: null,
                            divider: null,
                            children: [
                              {
                                grtx: {
                                  "AD zone info01": "0",
                                  "AD zone info02": "MD",
                                  "AD zone info03": "$HAS_HC",
                                  "AD zone info04": "$HAS_DR",
                                  "AD zone info05": "$IS_DR_EXT",
                                  "AD zone info06": "$ZM_CNT_02",
                                },
                                index: "0.2.1.1.1.1.1.0",
                                divDir: "A",
                                linDiv: "1:1",
                                divElem: 0,
                                horDefType: "P",
                                top: null,
                                bottom: null,
                                divider: "$DS_WACA_ZM_ART_02",
                                children: [
                                  {
                                    index: "0.2.1.1.1.1.1.0.0",
                                    divDir: "V",
                                    linDiv: "",
                                    divElem: 0,
                                    horDefType: "P",
                                    top: null,
                                    bottom: null,
                                    divider: null,
                                    children: [],
                                    sides: {
                                      "0": null,
                                      "1": null,
                                      "2": null,
                                      "3": null,
                                    },
                                  },
                                  {
                                    index: "0.2.1.1.1.1.1.0.1",
                                    divDir: "V",
                                    linDiv: "",
                                    divElem: 0,
                                    horDefType: "P",
                                    top: null,
                                    bottom: null,
                                    divider: null,
                                    children: [],
                                    sides: {
                                      "0": null,
                                      "1": null,
                                      "2": null,
                                      "3": null,
                                    },
                                  },
                                ],
                                selectable: true,
                                sides: {
                                  "0": null,
                                  "1": null,
                                  "2": null,
                                  "3": null,
                                },
                              },
                              {
                                index: "0.2.1.1.1.1.1.1",
                                divDir: "H",
                                linDiv: "#DS_LD_ZM_SZ_03",
                                divElem: 0,
                                horDefType: "W",
                                top: null,
                                bottom: null,
                                divider: null,
                                children: [
                                  {
                                    grtx: {
                                      "AD zone info01": "0",
                                      "AD zone info02": "MD",
                                      "AD zone info03": "$HAS_HC",
                                      "AD zone info04": "$HAS_DR",
                                      "AD zone info05": "$IS_DR_EXT",
                                      "AD zone info06": "$ZM_CNT_03",
                                    },
                                    index: "0.2.1.1.1.1.1.1.0",
                                    divDir: "A",
                                    linDiv: "1:1",
                                    divElem: 0,
                                    horDefType: "P",
                                    top: null,
                                    bottom: null,
                                    divider: "$DS_WACA_ZM_ART_03",
                                    children: [
                                      {
                                        index: "0.2.1.1.1.1.1.1.0.0",
                                        divDir: "V",
                                        linDiv: "",
                                        divElem: 0,
                                        horDefType: "P",
                                        top: null,
                                        bottom: null,
                                        divider: null,
                                        children: [],
                                        sides: {
                                          "0": null,
                                          "1": null,
                                          "2": null,
                                          "3": null,
                                        },
                                      },
                                      {
                                        index: "0.2.1.1.1.1.1.1.0.1",
                                        divDir: "V",
                                        linDiv: "",
                                        divElem: 0,
                                        horDefType: "P",
                                        top: null,
                                        bottom: null,
                                        divider: null,
                                        children: [],
                                        sides: {
                                          "0": null,
                                          "1": null,
                                          "2": null,
                                          "3": null,
                                        },
                                      },
                                    ],
                                    selectable: true,
                                    sides: {
                                      "0": null,
                                      "1": null,
                                      "2": null,
                                      "3": null,
                                    },
                                  },
                                  {
                                    index: "0.2.1.1.1.1.1.1.1",
                                    divDir: "H",
                                    linDiv: "#DS_LD_ZM_SZ_04",
                                    divElem: 0,
                                    horDefType: "W",
                                    top: null,
                                    bottom: null,
                                    divider: null,
                                    children: [
                                      {
                                        grtx: {
                                          "AD zone info01": "0",
                                          "AD zone info02": "MD",
                                          "AD zone info03": "$HAS_HC",
                                          "AD zone info04": "$HAS_DR",
                                          "AD zone info05": "$IS_DR_EXT",
                                          "AD zone info06": "$ZM_CNT_04",
                                        },
                                        index: "0.2.1.1.1.1.1.1.1.0",
                                        divDir: "A",
                                        linDiv: "1:1",
                                        divElem: 0,
                                        horDefType: "P",
                                        top: null,
                                        bottom: null,
                                        divider: "$DS_WACA_ZM_ART_04",
                                        children: [
                                          {
                                            index: "0.2.1.1.1.1.1.1.1.0.0",
                                            divDir: "V",
                                            linDiv: "",
                                            divElem: 0,
                                            horDefType: "P",
                                            top: null,
                                            bottom: null,
                                            divider: null,
                                            children: [],
                                            sides: {
                                              "0": null,
                                              "1": null,
                                              "2": null,
                                              "3": null,
                                            },
                                          },
                                          {
                                            index: "0.2.1.1.1.1.1.1.1.0.1",
                                            divDir: "V",
                                            linDiv: "",
                                            divElem: 0,
                                            horDefType: "P",
                                            top: null,
                                            bottom: null,
                                            divider: null,
                                            children: [],
                                            sides: {
                                              "0": null,
                                              "1": null,
                                              "2": null,
                                              "3": null,
                                            },
                                          },
                                        ],
                                        selectable: true,
                                        sides: {
                                          "0": null,
                                          "1": null,
                                          "2": null,
                                          "3": null,
                                        },
                                      },
                                      {
                                        index: "0.2.1.1.1.1.1.1.1.1",
                                        divDir: "H",
                                        linDiv: "#DS_LD_ZM_SZ_05",
                                        divElem: 0,
                                        horDefType: "W",
                                        top: null,
                                        bottom: null,
                                        divider: null,
                                        children: [
                                          {
                                            grtx: {
                                              "AD zone info01": "0",
                                              "AD zone info02": "MD",
                                              "AD zone info03": "$HAS_HC",
                                              "AD zone info04": "$HAS_DR",
                                              "AD zone info05": "$IS_DR_EXT",
                                              "AD zone info06": "$ZM_CNT_05",
                                            },
                                            index: "0.2.1.1.1.1.1.1.1.1.0",
                                            divDir: "A",
                                            linDiv: "1:1",
                                            divElem: 0,
                                            horDefType: "P",
                                            top: null,
                                            bottom: null,
                                            divider: "$DS_WACA_ZM_ART_05",
                                            children: [
                                              {
                                                index:
                                                    "0.2.1.1.1.1.1.1.1.1.0.0",
                                                divDir: "V",
                                                linDiv: "",
                                                divElem: 0,
                                                horDefType: "P",
                                                top: null,
                                                bottom: null,
                                                divider: null,
                                                children: [],
                                                sides: {
                                                  "0": null,
                                                  "1": null,
                                                  "2": null,
                                                  "3": null,
                                                },
                                              },
                                              {
                                                index:
                                                    "0.2.1.1.1.1.1.1.1.1.0.1",
                                                divDir: "V",
                                                linDiv: "",
                                                divElem: 0,
                                                horDefType: "P",
                                                top: null,
                                                bottom: null,
                                                divider: null,
                                                children: [],
                                                sides: {
                                                  "0": null,
                                                  "1": null,
                                                  "2": null,
                                                  "3": null,
                                                },
                                              },
                                            ],
                                            selectable: true,
                                            sides: {
                                              "0": null,
                                              "1": null,
                                              "2": null,
                                              "3": null,
                                            },
                                          },
                                          {
                                            index: "0.2.1.1.1.1.1.1.1.1.1",
                                            divDir: "H",
                                            linDiv: "#DS_LD_ZM_SZ_06",
                                            divElem: 0,
                                            horDefType: "W",
                                            top: null,
                                            bottom: null,
                                            divider: null,
                                            children: [
                                              {
                                                grtx: {
                                                  "AD zone info01": "0",
                                                  "AD zone info02": "MD",
                                                  "AD zone info03": "$HAS_HC",
                                                  "AD zone info04": "$HAS_DR",
                                                  "AD zone info05":
                                                      "$IS_DR_EXT",
                                                  "AD zone info06":
                                                      "$ZM_CNT_06",
                                                },
                                                index:
                                                    "0.2.1.1.1.1.1.1.1.1.1.0",
                                                divDir: "A",
                                                linDiv: "1:1",
                                                divElem: 0,
                                                horDefType: "P",
                                                top: null,
                                                bottom: null,
                                                divider: "$DS_WACA_ZM_ART_06",
                                                children: [
                                                  {
                                                    index:
                                                        "0.2.1.1.1.1.1.1.1.1.1.0.0",
                                                    divDir: "V",
                                                    linDiv: "",
                                                    divElem: 0,
                                                    horDefType: "P",
                                                    top: null,
                                                    bottom: null,
                                                    divider: null,
                                                    children: [],
                                                    sides: {
                                                      "0": null,
                                                      "1": null,
                                                      "2": null,
                                                      "3": null,
                                                    },
                                                  },
                                                  {
                                                    index:
                                                        "0.2.1.1.1.1.1.1.1.1.1.0.1",
                                                    divDir: "V",
                                                    linDiv: "",
                                                    divElem: 0,
                                                    horDefType: "P",
                                                    top: null,
                                                    bottom: null,
                                                    divider: null,
                                                    children: [],
                                                    sides: {
                                                      "0": null,
                                                      "1": null,
                                                      "2": null,
                                                      "3": null,
                                                    },
                                                  },
                                                ],
                                                selectable: true,
                                                sides: {
                                                  "0": null,
                                                  "1": null,
                                                  "2": null,
                                                  "3": null,
                                                },
                                              },
                                              {
                                                index:
                                                    "0.2.1.1.1.1.1.1.1.1.1.1",
                                                divDir: "H",
                                                linDiv: "#DS_LD_ZM_SZ_07",
                                                divElem: 0,
                                                horDefType: "W",
                                                top: null,
                                                bottom: null,
                                                divider: null,
                                                children: [
                                                  {
                                                    grtx: {
                                                      "AD zone info01": "0",
                                                      "AD zone info02": "MD",
                                                      "AD zone info03":
                                                          "$HAS_HC",
                                                      "AD zone info04":
                                                          "$HAS_DR",
                                                      "AD zone info05":
                                                          "$IS_DR_EXT",
                                                      "AD zone info06":
                                                          "$ZM_CNT_07",
                                                    },
                                                    index:
                                                        "0.2.1.1.1.1.1.1.1.1.1.1.0",
                                                    divDir: "A",
                                                    linDiv: "1:1",
                                                    divElem: 0,
                                                    horDefType: "P",
                                                    top: null,
                                                    bottom: null,
                                                    divider:
                                                        "$DS_WACA_ZM_ART_07",
                                                    children: [
                                                      {
                                                        index:
                                                            "0.2.1.1.1.1.1.1.1.1.1.1.0.0",
                                                        divDir: "V",
                                                        linDiv: "",
                                                        divElem: 0,
                                                        horDefType: "P",
                                                        top: null,
                                                        bottom: null,
                                                        divider: null,
                                                        children: [],
                                                        sides: {
                                                          "0": null,
                                                          "1": null,
                                                          "2": null,
                                                          "3": null,
                                                        },
                                                      },
                                                      {
                                                        index:
                                                            "0.2.1.1.1.1.1.1.1.1.1.1.0.1",
                                                        divDir: "V",
                                                        linDiv: "",
                                                        divElem: 0,
                                                        horDefType: "P",
                                                        top: null,
                                                        bottom: null,
                                                        divider: null,
                                                        children: [],
                                                        sides: {
                                                          "0": null,
                                                          "1": null,
                                                          "2": null,
                                                          "3": null,
                                                        },
                                                      },
                                                    ],
                                                    selectable: true,
                                                    sides: {
                                                      "0": null,
                                                      "1": null,
                                                      "2": null,
                                                      "3": null,
                                                    },
                                                  },
                                                  {
                                                    index:
                                                        "0.2.1.1.1.1.1.1.1.1.1.1.1",
                                                    divDir: "H",
                                                    linDiv: "#DS_LD_ZM_SZ_08",
                                                    divElem: 0,
                                                    horDefType: "W",
                                                    top: null,
                                                    bottom: null,
                                                    divider: null,
                                                    children: [
                                                      {
                                                        grtx: {
                                                          "AD zone info01": "0",
                                                          "AD zone info02":
                                                              "MD",
                                                          "AD zone info03":
                                                              "$HAS_HC",
                                                          "AD zone info04":
                                                              "$HAS_DR",
                                                          "AD zone info05":
                                                              "$IS_DR_EXT",
                                                          "AD zone info06":
                                                              "$ZM_CNT_08",
                                                        },
                                                        index:
                                                            "0.2.1.1.1.1.1.1.1.1.1.1.1.0",
                                                        divDir: "A",
                                                        linDiv: "1:1",
                                                        divElem: 0,
                                                        horDefType: "P",
                                                        top: null,
                                                        bottom: null,
                                                        divider:
                                                            "$DS_WACA_ZM_ART_08",
                                                        children: [
                                                          {
                                                            index:
                                                                "0.2.1.1.1.1.1.1.1.1.1.1.1.0.0",
                                                            divDir: "V",
                                                            linDiv: "",
                                                            divElem: 0,
                                                            horDefType: "P",
                                                            top: null,
                                                            bottom: null,
                                                            divider: null,
                                                            children: [],
                                                            sides: {
                                                              "0": null,
                                                              "1": null,
                                                              "2": null,
                                                              "3": null,
                                                            },
                                                          },
                                                          {
                                                            index:
                                                                "0.2.1.1.1.1.1.1.1.1.1.1.1.0.1",
                                                            divDir: "V",
                                                            linDiv: "",
                                                            divElem: 0,
                                                            horDefType: "P",
                                                            top: null,
                                                            bottom: null,
                                                            divider: null,
                                                            children: [],
                                                            sides: {
                                                              "0": null,
                                                              "1": null,
                                                              "2": null,
                                                              "3": null,
                                                            },
                                                          },
                                                        ],
                                                        selectable: true,
                                                        sides: {
                                                          "0": null,
                                                          "1": null,
                                                          "2": null,
                                                          "3": null,
                                                        },
                                                      },
                                                      {
                                                        index:
                                                            "0.2.1.1.1.1.1.1.1.1.1.1.1.1",
                                                        divDir: "H",
                                                        linDiv:
                                                            "#DS_LD_ZM_SZ_09",
                                                        divElem: 0,
                                                        horDefType: "W",
                                                        top: null,
                                                        bottom: null,
                                                        divider: null,
                                                        children: [
                                                          {
                                                            grtx: {
                                                              "AD zone info01":
                                                                  "0",
                                                              "AD zone info02":
                                                                  "MD",
                                                              "AD zone info03":
                                                                  "$HAS_HC",
                                                              "AD zone info04":
                                                                  "$HAS_DR",
                                                              "AD zone info05":
                                                                  "$IS_DR_EXT",
                                                              "AD zone info06":
                                                                  "$ZM_CNT_09",
                                                            },
                                                            index:
                                                                "0.2.1.1.1.1.1.1.1.1.1.1.1.1.0",
                                                            divDir: "A",
                                                            linDiv: "1:1",
                                                            divElem: 0,
                                                            horDefType: "P",
                                                            top: null,
                                                            bottom: null,
                                                            divider:
                                                                "$DS_WACA_ZM_ART_09",
                                                            children: [
                                                              {
                                                                index:
                                                                    "0.2.1.1.1.1.1.1.1.1.1.1.1.1.0.0",
                                                                divDir: "V",
                                                                linDiv: "",
                                                                divElem: 0,
                                                                horDefType: "P",
                                                                top: null,
                                                                bottom: null,
                                                                divider: null,
                                                                children: [],
                                                                sides: {
                                                                  "0": null,
                                                                  "1": null,
                                                                  "2": null,
                                                                  "3": null,
                                                                },
                                                              },
                                                              {
                                                                index:
                                                                    "0.2.1.1.1.1.1.1.1.1.1.1.1.1.0.1",
                                                                divDir: "V",
                                                                linDiv: "",
                                                                divElem: 0,
                                                                horDefType: "P",
                                                                top: null,
                                                                bottom: null,
                                                                divider: null,
                                                                children: [],
                                                                sides: {
                                                                  "0": null,
                                                                  "1": null,
                                                                  "2": null,
                                                                  "3": null,
                                                                },
                                                              },
                                                            ],
                                                            selectable: true,
                                                            sides: {
                                                              "0": null,
                                                              "1": null,
                                                              "2": null,
                                                              "3": null,
                                                            },
                                                          },
                                                          {
                                                            index:
                                                                "0.2.1.1.1.1.1.1.1.1.1.1.1.1.1",
                                                            divDir: "H",
                                                            linDiv:
                                                                "#DS_LD_ZM_SZ_10",
                                                            divElem: 0,
                                                            horDefType: "W",
                                                            top: null,
                                                            bottom: null,
                                                            divider: null,
                                                            children: [
                                                              {
                                                                grtx: {
                                                                  "AD zone info01":
                                                                      "0",
                                                                  "AD zone info02":
                                                                      "MD",
                                                                  "AD zone info03":
                                                                      "$HAS_HC",
                                                                  "AD zone info04":
                                                                      "$HAS_DR",
                                                                  "AD zone info05":
                                                                      "$IS_DR_EXT",
                                                                  "AD zone info06":
                                                                      "$ZM_CNT_10",
                                                                },
                                                                index:
                                                                    "0.2.1.1.1.1.1.1.1.1.1.1.1.1.1.0",
                                                                divDir: "A",
                                                                linDiv: "1:1",
                                                                divElem: 0,
                                                                horDefType: "P",
                                                                top: null,
                                                                bottom: null,
                                                                divider:
                                                                    "$DS_WACA_ZM_ART_10",
                                                                children: [
                                                                  {
                                                                    index:
                                                                        "0.2.1.1.1.1.1.1.1.1.1.1.1.1.1.0.0",
                                                                    divDir: "V",
                                                                    linDiv: "",
                                                                    divElem: 0,
                                                                    horDefType:
                                                                        "P",
                                                                    top: null,
                                                                    bottom:
                                                                        null,
                                                                    divider:
                                                                        null,
                                                                    children:
                                                                        [],
                                                                    sides: {
                                                                      "0": null,
                                                                      "1": null,
                                                                      "2": null,
                                                                      "3": null,
                                                                    },
                                                                  },
                                                                  {
                                                                    index:
                                                                        "0.2.1.1.1.1.1.1.1.1.1.1.1.1.1.0.1",
                                                                    divDir: "V",
                                                                    linDiv: "",
                                                                    divElem: 0,
                                                                    horDefType:
                                                                        "P",
                                                                    top: null,
                                                                    bottom:
                                                                        null,
                                                                    divider:
                                                                        null,
                                                                    children:
                                                                        [],
                                                                    sides: {
                                                                      "0": null,
                                                                      "1": null,
                                                                      "2": null,
                                                                      "3": null,
                                                                    },
                                                                  },
                                                                ],
                                                                selectable: true,
                                                                sides: {
                                                                  "0": null,
                                                                  "1": null,
                                                                  "2": null,
                                                                  "3": null,
                                                                },
                                                              },
                                                              {
                                                                index:
                                                                    "0.2.1.1.1.1.1.1.1.1.1.1.1.1.1.1",
                                                                divDir: "H",
                                                                linDiv:
                                                                    "#DS_LD_ZM_SZ_11",
                                                                divElem: 0,
                                                                horDefType: "W",
                                                                top: null,
                                                                bottom: null,
                                                                divider: null,
                                                                children: [
                                                                  {
                                                                    grtx: {
                                                                      "AD zone info01":
                                                                          "0",
                                                                      "AD zone info02":
                                                                          "MD",
                                                                      "AD zone info03":
                                                                          "$HAS_HC",
                                                                      "AD zone info04":
                                                                          "$HAS_DR",
                                                                      "AD zone info05":
                                                                          "$IS_DR_EXT",
                                                                      "AD zone info06":
                                                                          "$ZM_CNT_11",
                                                                    },
                                                                    index:
                                                                        "0.2.1.1.1.1.1.1.1.1.1.1.1.1.1.1.0",
                                                                    divDir: "A",
                                                                    linDiv:
                                                                        "1:1",
                                                                    divElem: 0,
                                                                    horDefType:
                                                                        "P",
                                                                    top: null,
                                                                    bottom:
                                                                        null,
                                                                    divider:
                                                                        "$DS_WACA_ZM_ART_11",
                                                                    children: [
                                                                      {
                                                                        index:
                                                                            "0.2.1.1.1.1.1.1.1.1.1.1.1.1.1.1.0.0",
                                                                        divDir:
                                                                            "V",
                                                                        linDiv:
                                                                            "",
                                                                        divElem: 0,
                                                                        horDefType:
                                                                            "P",
                                                                        top: null,
                                                                        bottom:
                                                                            null,
                                                                        divider:
                                                                            null,
                                                                        children:
                                                                            [],
                                                                        sides: {
                                                                          "0": null,
                                                                          "1": null,
                                                                          "2": null,
                                                                          "3": null,
                                                                        },
                                                                      },
                                                                      {
                                                                        index:
                                                                            "0.2.1.1.1.1.1.1.1.1.1.1.1.1.1.1.0.1",
                                                                        divDir:
                                                                            "V",
                                                                        linDiv:
                                                                            "",
                                                                        divElem: 0,
                                                                        horDefType:
                                                                            "P",
                                                                        top: null,
                                                                        bottom:
                                                                            null,
                                                                        divider:
                                                                            null,
                                                                        children:
                                                                            [],
                                                                        sides: {
                                                                          "0": null,
                                                                          "1": null,
                                                                          "2": null,
                                                                          "3": null,
                                                                        },
                                                                      },
                                                                    ],
                                                                    selectable: true,
                                                                    sides: {
                                                                      "0": null,
                                                                      "1": null,
                                                                      "2": null,
                                                                      "3": null,
                                                                    },
                                                                  },
                                                                  {
                                                                    index:
                                                                        "0.2.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1",
                                                                    divDir: "H",
                                                                    linDiv:
                                                                        "#DS_LD_ZM_SZ_12",
                                                                    divElem: 0,
                                                                    horDefType:
                                                                        "W",
                                                                    top: null,
                                                                    bottom:
                                                                        null,
                                                                    divider:
                                                                        null,
                                                                    children: [
                                                                      {
                                                                        grtx: {
                                                                          "AD zone info01":
                                                                              "0",
                                                                          "AD zone info02":
                                                                              "MD",
                                                                          "AD zone info03":
                                                                              "$HAS_HC",
                                                                          "AD zone info04":
                                                                              "$HAS_DR",
                                                                          "AD zone info05":
                                                                              "$IS_DR_EXT",
                                                                          "AD zone info06":
                                                                              "$ZM_CNT_12",
                                                                        },
                                                                        index:
                                                                            "0.2.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.0",
                                                                        divDir:
                                                                            "A",
                                                                        linDiv:
                                                                            "1:1",
                                                                        divElem: 0,
                                                                        horDefType:
                                                                            "P",
                                                                        top: null,
                                                                        bottom:
                                                                            null,
                                                                        divider:
                                                                            "$DS_WACA_ZM_ART_12",
                                                                        children:
                                                                            [
                                                                              {
                                                                                index:
                                                                                    "0.2.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.0.0",
                                                                                divDir:
                                                                                    "V",
                                                                                linDiv:
                                                                                    "",
                                                                                divElem: 0,
                                                                                horDefType:
                                                                                    "P",
                                                                                top: null,
                                                                                bottom:
                                                                                    null,
                                                                                divider:
                                                                                    null,
                                                                                children:
                                                                                    [],
                                                                                sides:
                                                                                    {
                                                                                      "0": null,
                                                                                      "1": null,
                                                                                      "2": null,
                                                                                      "3": null,
                                                                                    },
                                                                              },
                                                                              {
                                                                                index:
                                                                                    "0.2.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.0.1",
                                                                                divDir:
                                                                                    "V",
                                                                                linDiv:
                                                                                    "",
                                                                                divElem: 0,
                                                                                horDefType:
                                                                                    "P",
                                                                                top: null,
                                                                                bottom:
                                                                                    null,
                                                                                divider:
                                                                                    null,
                                                                                children:
                                                                                    [],
                                                                                sides:
                                                                                    {
                                                                                      "0": null,
                                                                                      "1": null,
                                                                                      "2": null,
                                                                                      "3": null,
                                                                                    },
                                                                              },
                                                                            ],
                                                                        selectable: true,
                                                                        sides: {
                                                                          "0": null,
                                                                          "1": null,
                                                                          "2": null,
                                                                          "3": null,
                                                                        },
                                                                      },
                                                                      {
                                                                        index:
                                                                            "0.2.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1",
                                                                        divDir:
                                                                            "H",
                                                                        linDiv:
                                                                            "#DS_LD_ZM_SZ_13",
                                                                        divElem: 0,
                                                                        horDefType:
                                                                            "W",
                                                                        top: null,
                                                                        bottom:
                                                                            null,
                                                                        divider:
                                                                            null,
                                                                        children:
                                                                            [
                                                                              {
                                                                                index:
                                                                                    "0.2.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.0",
                                                                                divDir:
                                                                                    "V",
                                                                                linDiv:
                                                                                    "",
                                                                                divElem: 0,
                                                                                horDefType:
                                                                                    "P",
                                                                                top: null,
                                                                                bottom:
                                                                                    null,
                                                                                divider:
                                                                                    null,
                                                                                children:
                                                                                    [],
                                                                                selectable: true,
                                                                                sides:
                                                                                    {
                                                                                      "0": null,
                                                                                      "1": null,
                                                                                      "2": null,
                                                                                      "3": null,
                                                                                    },
                                                                              },
                                                                              {
                                                                                index:
                                                                                    "0.2.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1",
                                                                                divDir:
                                                                                    "H",
                                                                                linDiv:
                                                                                    "#DS_LD_ZM_SZ_14",
                                                                                divElem: 0,
                                                                                horDefType:
                                                                                    "W",
                                                                                top: null,
                                                                                bottom:
                                                                                    null,
                                                                                divider:
                                                                                    null,
                                                                                children:
                                                                                    [],
                                                                                sides:
                                                                                    {
                                                                                      "0": null,
                                                                                      "1": null,
                                                                                      "2": null,
                                                                                      "3": null,
                                                                                    },
                                                                              },
                                                                            ],
                                                                        sides: {
                                                                          "0": null,
                                                                          "1": null,
                                                                          "2": null,
                                                                          "3": null,
                                                                        },
                                                                      },
                                                                    ],
                                                                    sides: {
                                                                      "0": null,
                                                                      "1": null,
                                                                      "2": null,
                                                                      "3": null,
                                                                    },
                                                                  },
                                                                ],
                                                                sides: {
                                                                  "0": null,
                                                                  "1": null,
                                                                  "2": null,
                                                                  "3": null,
                                                                },
                                                              },
                                                            ],
                                                            sides: {
                                                              "0": null,
                                                              "1": null,
                                                              "2": null,
                                                              "3": null,
                                                            },
                                                          },
                                                        ],
                                                        sides: {
                                                          "0": null,
                                                          "1": null,
                                                          "2": null,
                                                          "3": null,
                                                        },
                                                      },
                                                    ],
                                                    sides: {
                                                      "0": null,
                                                      "1": null,
                                                      "2": null,
                                                      "3": null,
                                                    },
                                                  },
                                                ],
                                                sides: {
                                                  "0": null,
                                                  "1": null,
                                                  "2": null,
                                                  "3": null,
                                                },
                                              },
                                            ],
                                            sides: {
                                              "0": null,
                                              "1": null,
                                              "2": null,
                                              "3": null,
                                            },
                                          },
                                        ],
                                        sides: {
                                          "0": null,
                                          "1": null,
                                          "2": null,
                                          "3": null,
                                        },
                                      },
                                    ],
                                    sides: {
                                      "0": null,
                                      "1": null,
                                      "2": null,
                                      "3": null,
                                    },
                                  },
                                ],
                                sides: {
                                  "0": null,
                                  "1": null,
                                  "2": null,
                                  "3": null,
                                },
                              },
                            ],
                            sides: {
                              "0": null,
                              "1": null,
                              "2": null,
                              "3": null,
                            },
                          },
                          {
                            grtx: {
                              "AD zone info01": "$IS_ML_P",
                              "AD zone info02": "CLMD",
                              "AD zone info03": "$HAS_HC",
                              "AD zone info04": "$HAS_DR",
                              "AD zone info05": "$IS_DR_EXT",
                              "AD zone info06": "$ZM_CNT_99",
                            },
                            index: "0.2.1.1.1.1.2",
                            divDir: "A",
                            linDiv: "1:1",
                            divElem: 0,
                            horDefType: "P",
                            top: null,
                            bottom: null,
                            divider: "$DS_WACA_ZM_ART_99",
                            children: [
                              {
                                index: "0.2.1.1.1.1.2.0",
                                divDir: "V",
                                linDiv: "",
                                divElem: 0,
                                horDefType: "P",
                                top: null,
                                bottom: null,
                                divider: null,
                                children: [],
                                sides: {
                                  "0": null,
                                  "1": null,
                                  "2": null,
                                  "3": null,
                                },
                              },
                              {
                                index: "0.2.1.1.1.1.2.1",
                                divDir: "V",
                                linDiv: "",
                                divElem: 0,
                                horDefType: "P",
                                top: null,
                                bottom: null,
                                divider: null,
                                children: [],
                                sides: {
                                  "0": null,
                                  "1": null,
                                  "2": null,
                                  "3": null,
                                },
                              },
                            ],
                            selectable: true,
                            sides: {
                              "0": null,
                              "1": null,
                              "2": null,
                              "3": null,
                            },
                          },
                        ],
                        sides: {
                          "0": null,
                          "1": null,
                          "2": null,
                          "3": null,
                        },
                      },
                      {
                        index: "0.2.1.1.1.2",
                        divDir: "V",
                        linDiv: "",
                        divElem: 0,
                        horDefType: "P",
                        top: null,
                        bottom: null,
                        divider: null,
                        children: [],
                        sides: {
                          "0": null,
                          "1": null,
                          "2": null,
                          "3": null,
                        },
                      },
                      {
                        index: "0.2.1.1.1.3",
                        divDir: "V",
                        linDiv: "",
                        divElem: 0,
                        horDefType: "P",
                        top: "CP_1_TSI_1000_C1",
                        bottom: null,
                        divider: null,
                        children: [],
                        sides: {
                          "0": null,
                          "1": null,
                          "2": null,
                          "3": null,
                        },
                      },
                      {
                        index: "0.2.1.1.1.4",
                        divDir: "V",
                        linDiv: "",
                        divElem: 0,
                        horDefType: "P",
                        top: "CP_1_TSI_1000_C1",
                        bottom: null,
                        divider: null,
                        children: [],
                        sides: {
                          "0": null,
                          "1": null,
                          "2": null,
                          "3": null,
                        },
                      },
                      {
                        index: "0.2.1.1.1.5",
                        divDir: "V",
                        linDiv: "",
                        divElem: 0,
                        horDefType: "P",
                        top: null,
                        bottom: null,
                        divider: null,
                        children: [],
                        sides: {
                          "0": null,
                          "1": null,
                          "2": null,
                          "3": null,
                        },
                      },
                      {
                        index: "0.2.1.1.1.6",
                        divDir: "V",
                        linDiv: "",
                        divElem: 0,
                        horDefType: "P",
                        top: null,
                        bottom: null,
                        divider: null,
                        children: [],
                        sides: {
                          "0": null,
                          "1": null,
                          "2": null,
                          "3": null,
                        },
                      },
                    ],
                    sides: {
                      "0": null,
                      "1": null,
                      "2": null,
                      "3": null,
                    },
                  },
                  {
                    index: "0.2.1.1.2",
                    divDir: "H",
                    linDiv: "((round(2700/$ZM_STEP-0.5))*$ZM_STEP)mm:1",
                    divElem: 0,
                    horDefType: "W",
                    top: null,
                    bottom: null,
                    divider: null,
                    children: [
                      {
                        index: "0.2.1.1.2.0",
                        divDir: "V",
                        linDiv: "",
                        divElem: 0,
                        horDefType: "P",
                        top: null,
                        bottom: null,
                        divider: null,
                        children: [],
                        sides: {
                          "0": {
                            inSet: 0,
                            inSetFor: "",
                            partType: "S",
                            cpName: "CP_1_CM_0000",
                          },
                          "1": null,
                          "2": null,
                          "3": null,
                        },
                      },
                      {
                        index: "0.2.1.1.2.1",
                        divDir: "V",
                        linDiv: "",
                        divElem: 0,
                        horDefType: "P",
                        top: null,
                        bottom: null,
                        divider: null,
                        children: [],
                        sides: {
                          "0": {
                            inSet: 0,
                            inSetFor: "",
                            partType: "S",
                            cpName: "CP_1_CM_0000",
                          },
                          "1": null,
                          "2": null,
                          "3": null,
                        },
                      },
                    ],
                    sides: {
                      "0": null,
                      "1": null,
                      "2": null,
                      "3": null,
                    },
                  },
                  {
                    index: "0.2.1.1.3",
                    divDir: "V",
                    linDiv: "",
                    divElem: 0,
                    horDefType: "P",
                    top: "CP_1_TSI_1000_C1",
                    bottom: null,
                    divider: null,
                    children: [],
                    sides: {
                      "0": null,
                      "1": null,
                      "2": null,
                      "3": null,
                    },
                  },
                  {
                    index: "0.2.1.1.4",
                    divDir: "V",
                    linDiv: "",
                    divElem: 0,
                    horDefType: "P",
                    top: "CP_1_TSI_1000_C1",
                    bottom: null,
                    divider: null,
                    children: [],
                    sides: {
                      "0": null,
                      "1": null,
                      "2": null,
                      "3": null,
                    },
                  },
                  {
                    index: "0.2.1.1.5",
                    divDir: "V",
                    linDiv: "",
                    divElem: 0,
                    horDefType: "P",
                    top: null,
                    bottom: null,
                    divider: null,
                    children: [],
                    sides: {
                      "0": null,
                      "1": null,
                      "2": null,
                      "3": null,
                    },
                  },
                  {
                    index: "0.2.1.1.6",
                    divDir: "V",
                    linDiv: "",
                    divElem: 0,
                    horDefType: "P",
                    top: null,
                    bottom: null,
                    divider: null,
                    children: [],
                    sides: {
                      "0": null,
                      "1": null,
                      "2": null,
                      "3": null,
                    },
                  },
                ],
                clickable: "FRONT",
                modifiable: true,
                sides: {
                  "0": null,
                  "1": null,
                  "2": null,
                  "3": null,
                },
              },
              {
                index: "0.2.1.2",
                divDir: "V",
                linDiv: "",
                divElem: 0,
                horDefType: "P",
                top: null,
                bottom: null,
                divider: null,
                children: [],
                sides: {
                  "0": null,
                  "1": null,
                  "2": null,
                  "3": null,
                },
              },
            ],
            sides: {
              "0": null,
              "1": null,
              "2": null,
              "3": null,
            },
          },
        ],
        sides: {
          "0": null,
          "1": null,
          "2": null,
          "3": null,
        },
      },
      {
        index: "0.3",
        divDir: "H",
        linDiv:
            "($ZL_D +50 -$Front_Side_GAP)mm:1:($ZR_D +50-$Front_Side_GAP)mm",
        divElem: 0,
        horDefType: "W",
        top: null,
        bottom: null,
        divider: null,
        children: [
          {
            index: "0.3.0",
            divDir: "H",
            linDiv: "1:($ZM_D + 50 -$Front_Side_GAP)mm",
            divElem: 0,
            horDefType: "D",
            top: null,
            bottom: null,
            divider: null,
            children: [
              {
                index: "0.3.0.0",
                divDir: "V",
                linDiv: "",
                divElem: 0,
                horDefType: "P",
                top: null,
                bottom: null,
                divider: null,
                children: [],
                sides: {
                  "0": null,
                  "1": null,
                  "2": null,
                  "3": null,
                },
              },
              {
                index: "0.3.0.1",
                divDir: "H",
                linDiv: "1:(50-2*$Front_Side_GAP)mm",
                divElem: 0,
                horDefType: "W",
                top: null,
                bottom: null,
                divider: null,
                children: [
                  {
                    index: "0.3.0.1.0",
                    divDir: "V",
                    linDiv: "",
                    divElem: 0,
                    horDefType: "P",
                    top: null,
                    bottom: null,
                    divider: null,
                    children: [],
                    sides: {
                      "0": null,
                      "1": null,
                      "2": null,
                      "3": null,
                    },
                  },
                  {
                    index: "0.3.0.1.1",
                    divDir: "H",
                    linDiv: "1:($ZM_D +$Front_Side_GAP)mm",
                    divElem: 0,
                    horDefType: "D",
                    top: null,
                    bottom: null,
                    divider: null,
                    children: [
                      {
                        index: "0.3.0.1.1.0",
                        divDir: "V",
                        linDiv: "$BASE_HEIGHT mm:1:$CROWN_HEIGHT mm",
                        divElem: 0,
                        horDefType: "P",
                        top: null,
                        bottom: null,
                        divider: null,
                        children: [
                          {
                            index: "0.3.0.1.1.0.0",
                            divDir: "V",
                            linDiv: "",
                            divElem: 0,
                            horDefType: "P",
                            top: null,
                            bottom: null,
                            divider: null,
                            children: [],
                            sides: {
                              "0": null,
                              "1": null,
                              "2": null,
                              "3": null,
                            },
                          },
                          {
                            index: "0.3.0.1.1.0.1",
                            divDir: "V",
                            linDiv: "",
                            divElem: 0,
                            horDefType: "P",
                            top: null,
                            bottom: null,
                            divider: null,
                            children: [
                              {
                                index: "0.3.0.1.1.0.1.0",
                                divDir: "V",
                                linDiv: "",
                                divElem: 0,
                                horDefType: "P",
                                top: null,
                                bottom: null,
                                divider: null,
                                children: [],
                                sides: {
                                  "0": null,
                                  "1": null,
                                  "2": null,
                                  "3": null,
                                },
                              },
                              {
                                index: "0.3.0.1.1.0.1.1",
                                divDir: "V",
                                linDiv: "",
                                divElem: 0,
                                horDefType: "P",
                                top: null,
                                bottom: null,
                                divider: null,
                                children: [],
                                sides: {
                                  "0": null,
                                  "1": null,
                                  "2": null,
                                  "3": null,
                                },
                              },
                              {
                                index: "0.3.0.1.1.0.1.2",
                                divDir: "V",
                                linDiv: "",
                                divElem: 0,
                                horDefType: "P",
                                top: null,
                                bottom: null,
                                divider: null,
                                children: [],
                                sides: {
                                  "0": null,
                                  "1": null,
                                  "2": null,
                                  "3": null,
                                },
                              },
                            ],
                            sides: {
                              "0": null,
                              "1": null,
                              "2": {
                                inSet: 0,
                                inSetFor: "",
                                partType: "S",
                                cpName: "CP_1_FI_S010",
                              },
                              "3": {
                                inSet: 0,
                                inSetFor: "",
                                partType: "S",
                                cpName: "CP_1_FI_10S0",
                              },
                            },
                          },
                          {
                            index: "0.3.0.1.1.0.2",
                            divDir: "V",
                            linDiv: "",
                            divElem: 0,
                            horDefType: "P",
                            top: null,
                            bottom: null,
                            divider: null,
                            children: [],
                            sides: {
                              "0": null,
                              "1": null,
                              "2": null,
                              "3": null,
                            },
                          },
                        ],
                        sides: {
                          "0": null,
                          "1": null,
                          "2": null,
                          "3": null,
                        },
                      },
                      {
                        index: "0.3.0.1.1.1",
                        divDir: "V",
                        linDiv: "",
                        divElem: 0,
                        horDefType: "P",
                        top: null,
                        bottom: null,
                        divider: null,
                        children: [],
                        sides: {
                          "0": null,
                          "1": null,
                          "2": null,
                          "3": null,
                        },
                      },
                      {
                        index: "0.3.0.1.1.2",
                        divDir: "V",
                        linDiv: "",
                        divElem: 0,
                        horDefType: "P",
                        top: null,
                        bottom: null,
                        divider: null,
                        children: [],
                        sides: {
                          "0": null,
                          "1": null,
                          "2": null,
                          "3": null,
                        },
                      },
                    ],
                    sides: {
                      "0": null,
                      "1": null,
                      "2": null,
                      "3": null,
                    },
                  },
                ],
                sides: {
                  "0": null,
                  "1": null,
                  "2": null,
                  "3": null,
                },
              },
            ],
            sides: {
              "0": null,
              "1": null,
              "2": null,
              "3": null,
            },
          },
          {
            index: "0.3.1",
            divDir: "V",
            linDiv: "",
            divElem: 0,
            horDefType: "P",
            top: null,
            bottom: null,
            divider: null,
            children: [],
            sides: {
              "0": null,
              "1": null,
              "2": null,
              "3": null,
            },
          },
          {
            index: "0.3.2",
            divDir: "H",
            linDiv: "1:($ZM_D +50-$Front_Side_GAP)mm",
            divElem: 0,
            horDefType: "D",
            top: null,
            bottom: null,
            divider: null,
            children: [
              {
                index: "0.3.2.0",
                divDir: "V",
                linDiv: "",
                divElem: 0,
                horDefType: "P",
                top: null,
                bottom: null,
                divider: null,
                children: [],
                sides: {
                  "0": null,
                  "1": null,
                  "2": null,
                  "3": null,
                },
              },
              {
                index: "0.3.2.1",
                divDir: "H",
                linDiv: "(50-2*$Front_Side_GAP)mm:1",
                divElem: 0,
                horDefType: "W",
                top: null,
                bottom: null,
                divider: null,
                children: [
                  {
                    index: "0.3.2.1.0",
                    divDir: "H",
                    linDiv: "1:($ZM_D +$Front_Side_GAP)mm",
                    divElem: 0,
                    horDefType: "D",
                    top: null,
                    bottom: null,
                    divider: null,
                    children: [
                      {
                        index: "0.3.2.1.0.0",
                        divDir: "V",
                        linDiv: "",
                        divElem: 0,
                        horDefType: "P",
                        top: null,
                        bottom: null,
                        divider: null,
                        children: [],
                        sides: {
                          "0": null,
                          "1": {
                            inSet: 0,
                            inSetFor: "",
                            partType: "S",
                            cpName: "CP_1_FI_10S0",
                          },
                          "2": {
                            inSet: 0,
                            inSetFor: "",
                            partType: "S",
                            cpName: "CP_1_FI_10S0",
                          },
                          "3": null,
                        },
                      },
                      {
                        index: "0.3.2.1.0.1",
                        divDir: "V",
                        linDiv: "",
                        divElem: 0,
                        horDefType: "P",
                        top: null,
                        bottom: null,
                        divider: null,
                        children: [],
                        sides: {
                          "0": null,
                          "1": null,
                          "2": null,
                          "3": null,
                        },
                      },
                    ],
                    sides: {
                      "0": null,
                      "1": null,
                      "2": null,
                      "3": null,
                    },
                  },
                  {
                    index: "0.3.2.1.1",
                    divDir: "V",
                    linDiv: "",
                    divElem: 0,
                    horDefType: "P",
                    top: null,
                    bottom: null,
                    divider: null,
                    children: [],
                    sides: {
                      "0": null,
                      "1": null,
                      "2": null,
                      "3": null,
                    },
                  },
                ],
                sides: {
                  "0": null,
                  "1": null,
                  "2": null,
                  "3": null,
                },
              },
            ],
            sides: {
              "0": null,
              "1": null,
              "2": null,
              "3": null,
            },
          },
        ],
        sides: {
          "0": null,
          "1": null,
          "2": null,
          "3": null,
        },
      },
    ],
    clickable: "FRONT",
    modifiable: true,
    sides: {
      "0": null,
      "1": null,
      "2": null,
      "3": null,
    },
  },
};
const sources: {
  [key: string]: Array<{
    data?: any;
    label: string;
    value: string;
  }>;
} = {
  INSTALLATION_TYPE_ITEMS: [
    {
      label: "Built-in",
      value: "BUILT_IN",
      data: {
        IS_BI_L: "1",
        IS_BI_R: "1",
      },
    },
    {
      label: "Free standing",
      value: "FREE_STANDING",
      data: {
        IS_BI_L: "0",
        IS_BI_R: "0",
      },
    },
    {
      label: "​Built-In left",
      value: "BUILT_IN_LEFT",
      data: {
        IS_BI_L: "1",
        IS_BI_R: "0",
      },
    },
    {
      label: "​Built-In right",
      value: "BUILT_IN_RIGHT",
      data: {
        IS_BI_L: "0",
        IS_BI_R: "1",
      },
    },
  ],
  DRAWER_TYPE_ITEMS: [
    {
      label: "Interior",
      value: "INTERIOR",
      data: {
        drawer_cp: "DR_BL_RUN_SYS_THIN_INT",
      },
    },
    {
      label: "Exterior",
      value: "EXTERIOR",
      data: {
        drawer_cp: "DR_BL_RUN_SYS_THIN_EXT",
      },
    },
  ],
  SHAPE_LAYOUT_LEFT_ITEMS: [
    {
      value: "SHAPE_LAYOUT_LEFT_01",
      label: "Left long, middle left short",
      data: {
        image: "shape/SHAPE_LAYOUT_LEFT_01.jpg",
        IS_LL_P: "1",
        IS_ML_N: "0",
        article_type: "CL",
        CORNER_WIDTH: "$STEP_ZL",
      },
    },
    {
      value: "SHAPE_LAYOUT_LEFT_02",
      label: "Left short, middle left long",
      data: {
        image: "shape/SHAPE_LAYOUT_LEFT_02.jpg",
        IS_LL_P: "0",
        IS_ML_N: "1",
        article_type: "CR",
        CORNER_WIDTH: "$STEP_ZM",
      },
    },
    {
      value: "SHAPE_LAYOUT_LEFT_03",
      label: "Left and middle left short",
      data: {
        image: "shape/SHAPE_LAYOUT_LEFT_03.jpg",
        IS_LL_P: "0",
        IS_ML_N: "0",
        article_type: "MD_CL_CR",
      },
    },
  ],
  SHAPE_LAYOUT_RIGHT_ITEMS: [
    {
      value: "SHAPE_LAYOUT_RIGHT_01",
      label: "Right long, middle right short",
      data: {
        image: "shape/SHAPE_LAYOUT_RIGHT_01.jpg",
        IS_RL_N: "1",
        IS_ML_P: "0",
        article_type: "CR",
        CORNER_WIDTH: "$STEP_ZR",
      },
    },
    {
      value: "SHAPE_LAYOUT_RIGHT_02",
      label: "Right short, middle right long",
      data: {
        image: "shape/SHAPE_LAYOUT_RIGHT_02.jpg",
        IS_RL_N: "0",
        IS_ML_P: "1",
        article_type: "CL",
        CORNER_WIDTH: "$STEP_ZM",
      },
    },
    {
      value: "SHAPE_LAYOUT_RIGHT_03",
      label: "Right and middle right short",
      data: {
        image: "shape/SHAPE_LAYOUT_RIGHT_03.jpg",
        IS_RL_N: "0",
        IS_ML_P: "0",
        article_type: "MD_CL_CR",
      },
    },
  ],
  DESIGN_STYLE_ITEMS: [
    {
      value: "COLLECTION_01",
      label: "Collection 1",
      data: {
        collection: "COLLECTION_01",
        image: "collection/COLLECTION_01.jpg",
      },
    },
    {
      value: "COLLECTION_02",
      label: "Collection 2",
      data: {
        collection: "COLLECTION_02",
        image: "collection/COLLECTION_02.jpg",
      },
    },
    {
      value: "COLLECTION_03",
      label: "Collection 3",
      data: {
        collection: "COLLECTION_03",
        image: "collection/COLLECTION_03.jpg",
      },
    },
    {
      value: "COLLECTION_04",
      label: "Collection 4",
      data: {
        collection: "COLLECTION_04",
        image: "collection/COLLECTION_04.jpg",
      },
    },
  ],
  FRONT_TYPE_ITEMS: [
    {
      value: "FA_01_MEL",
      label: "FA_01_MEL",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02", "COLLECTION_03"],
        have_pull: "Yes",
        door_type: "DOOR_01",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_01.PNG",
        description: "FA_01",
      },
    },
    {
      value: "FA_01_LAQ",
      label: "FA_01_LAQ",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02", "COLLECTION_03"],
        have_pull: "Yes",
        door_type: "DOOR_01",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_01.PNG",
        description: "FA_01",
      },
    },
    {
      value: "FA_01_VNR",
      label: "FA_01_VNR",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02", "COLLECTION_03"],
        have_pull: "Yes",
        door_type: "DOOR_01",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_01.PNG",
        description: "FA_01",
      },
    },
    {
      value: "FA_02_LAQ",
      label: "FA_02_LAQ",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02", "COLLECTION_03"],
        have_pull: "No",
        door_type: "DOOR_02",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_02.PNG",
        description: "FA_02",
      },
    },
    {
      value: "FA_02_VNR",
      label: "FA_02_VNR",
      data: {
        collections: ["COLLECTION_02"],
        have_pull: "No",
        door_type: "DOOR_02",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_02.PNG",
        description: "FA_02",
      },
    },
    {
      value: "FA_03_LAQ",
      label: "FA_03_LAQ",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02", "COLLECTION_03"],
        have_pull: "No",
        door_type: "DOOR_03",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_03.PNG",
        description: "FA_03",
      },
    },
    {
      value: "FA_03_VNR",
      label: "FA_03_VNR",
      data: {
        collections: ["COLLECTION_02"],
        have_pull: "No",
        door_type: "DOOR_03",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_03.PNG",
        description: "FA_03",
      },
    },
    {
      value: "FA_04_LAQ",
      label: "FA_04_LAQ",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02", "COLLECTION_03"],
        have_pull: "No",
        door_type: "DOOR_04",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_04.PNG",
        description: "FA_04",
      },
    },
    {
      value: "FA_04_VNR",
      label: "FA_04_VNR",
      data: {
        collections: ["COLLECTION_02"],
        have_pull: "No",
        door_type: "DOOR_04",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_04.PNG",
        description: "FA_04",
      },
    },
    {
      value: "FA_05_LAQ",
      label: "FA_05_LAQ",
      data: {
        collections: ["COLLECTION_01"],
        have_pull: "No",
        door_type: "DOOR_05",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_05.PNG",
        description: "FA_05",
      },
    },
    {
      value: "FA_05_VNR",
      label: "FA_05_VNR",
      data: {
        collections: ["COLLECTION_03"],
        have_pull: "No",
        door_type: "DOOR_05",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_05.PNG",
        description: "FA_05",
      },
    },
    {
      value: "FA_05_HPL",
      label: "FA_05_HPL",
      data: {
        collections: ["COLLECTION_03"],
        have_pull: "No",
        door_type: "DOOR_05",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_05.PNG",
        description: "FA_05",
      },
    },
    {
      value: "FA_06_LAQ",
      label: "FA_06_LAQ",
      data: {
        collections: ["COLLECTION_01"],
        have_pull: "No",
        door_type: "DOOR_06",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_06.PNG",
        description: "FA_06",
      },
    },
    {
      value: "FA_06_VNR",
      label: "FA_06_VNR",
      data: {
        collections: ["COLLECTION_02", "COLLECTION_03"],
        have_pull: "No",
        door_type: "DOOR_06",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_06.PNG",
        description: "FA_06",
      },
    },
    {
      value: "FA_06_HPL",
      label: "FA_06_HPL",
      data: {
        collections: ["COLLECTION_02", "COLLECTION_03"],
        have_pull: "No",
        door_type: "DOOR_06",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_06.PNG",
        description: "FA_06",
      },
    },
    {
      value: "FA_07_LAQ",
      label: "FA_07_LAQ",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_03", "COLLECTION_04"],
        have_pull: "Yes",
        door_type: "DOOR_07",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_07.PNG",
        description: "FA_07",
      },
    },
    {
      value: "FA_07_VNR",
      label: "FA_07_VNR",
      data: {
        collections: ["COLLECTION_04"],
        have_pull: "Yes",
        door_type: "DOOR_07",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_07.PNG",
        description: "FA_07",
      },
    },
    {
      value: "FA_08_LAQ",
      label: "FA_08_LAQ",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_03"],
        have_pull: "Yes",
        door_type: "DOOR_08",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_08.PNG",
        description: "FA_08",
      },
    },
    {
      value: "FA_08_VNR",
      label: "FA_08_VNR",
      data: {
        collections: ["COLLECTION_02"],
        have_pull: "Yes",
        door_type: "DOOR_08",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_08.PNG",
        description: "FA_08",
      },
    },
    {
      value: "FA_09_LAQ",
      label: "FA_09_LAQ",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_03"],
        have_pull: "Yes",
        door_type: "DOOR_09",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_09.PNG",
        description: "FA_09",
      },
    },
    {
      value: "FA_09_VNR",
      label: "FA_09_VNR",
      data: {
        collections: ["COLLECTION_02"],
        have_pull: "Yes",
        door_type: "DOOR_09",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_09.PNG",
        description: "FA_09",
      },
    },
    {
      value: "FA_10_MEL",
      label: "FA_10_MEL",
      data: {
        collections: ["COLLECTION_03", "COLLECTION_04"],
        have_pull: "Yes",
        door_type: "DOOR_10",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_10.PNG",
        description: "FA_10",
      },
    },
    {
      value: "FA_10_VNR",
      label: "FA_10_VNR",
      data: {
        collections: ["COLLECTION_03", "COLLECTION_04"],
        have_pull: "Yes",
        door_type: "DOOR_10",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_10.PNG",
        description: "FA_10",
      },
    },
    {
      value: "FA_10_LAQ",
      label: "FA_10_LAQ",
      data: {
        collections: ["COLLECTION_03"],
        have_pull: "Yes",
        door_type: "DOOR_10",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_10.PNG",
        description: "FA_10",
      },
    },
    {
      value: "FA_11_MEL",
      label: "FA_11_MEL",
      data: {
        collections: ["COLLECTION_03"],
        have_pull: "Yes",
        door_type: "DOOR_11",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_11.PNG",
        description: "FA_11",
      },
    },
    {
      value: "FA_11_VNR",
      label: "FA_11_VNR",
      data: {
        collections: ["COLLECTION_03", "COLLECTION_04"],
        have_pull: "Yes",
        door_type: "DOOR_11",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_11.PNG",
        description: "FA_11",
      },
    },
    {
      value: "FA_11_LAQ",
      label: "FA_11_LAQ",
      data: {
        collections: ["COLLECTION_03", "COLLECTION_04"],
        have_pull: "Yes",
        door_type: "DOOR_11",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_11.PNG",
        description: "FA_11",
      },
    },
    {
      value: "FA_12_MEL",
      label: "FA_12_MEL",
      data: {
        collections: ["COLLECTION_02"],
        have_pull: "Yes",
        door_type: "DOOR_12",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_12.PNG",
        description: "FA_12",
      },
    },
    {
      value: "FA_12_LAQ",
      label: "FA_12_LAQ",
      data: {
        collections: ["COLLECTION_03", "COLLECTION_04"],
        have_pull: "Yes",
        door_type: "DOOR_12",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_12.PNG",
        description: "FA_12",
      },
    },
    {
      value: "FA_12_VNR",
      label: "FA_12_VNR",
      data: {
        collections: ["COLLECTION_02"],
        have_pull: "Yes",
        door_type: "DOOR_12",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_12.PNG",
        description: "FA_12",
      },
    },
    {
      value: "FA_13_MEL",
      label: "FA_13_MEL",
      data: {
        collections: ["COLLECTION_02"],
        have_pull: "Yes",
        door_type: "DOOR_13",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_13.PNG",
        description: "FA_13",
      },
    },
    {
      value: "FA_13_LAQ",
      label: "FA_13_LAQ",
      data: {
        collections: ["COLLECTION_03", "COLLECTION_04"],
        have_pull: "Yes",
        door_type: "DOOR_13",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_13.PNG",
        description: "FA_13",
      },
    },
    {
      value: "FA_13_VNR",
      label: "FA_13_VNR",
      data: {
        collections: ["COLLECTION_02"],
        have_pull: "Yes",
        door_type: "DOOR_13",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_13.PNG",
        description: "FA_13",
      },
    },
    {
      value: "FA_14_MEL",
      label: "FA_14_MEL",
      data: {
        collections: ["COLLECTION_02"],
        have_pull: "Yes",
        door_type: "DOOR_14",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_14.PNG",
        description: "FA_14",
      },
    },
    {
      value: "FA_14_LAQ",
      label: "FA_14_LAQ",
      data: {
        collections: ["COLLECTION_03", "COLLECTION_04"],
        have_pull: "Yes",
        door_type: "DOOR_14",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_14.PNG",
        description: "FA_14",
      },
    },
    {
      value: "FA_14_VNR",
      label: "FA_14_VNR",
      data: {
        collections: ["COLLECTION_02"],
        have_pull: "Yes",
        door_type: "DOOR_14",
        cp_left: "CP_SDO_HL_PM_FD",
        cp_right: "CP_SDO_HR_PM_FD",
        image: "front/FA_14.PNG",
        description: "FA_14",
      },
    },
  ],
  FINISH_INT_ITEMS: [
    {
      value: "DE_VN_HGS_MDF_S4_01_19",
      label: "BONDI OAK 1",
      data: {
        collections: [
          "COLLECTION_01",
          "COLLECTION_02",
          "COLLECTION_03",
          "COLLECTION_04",
        ],
        material: "DE_VN_HGS_MDF_S4_01_19",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "DE_VNR_DLV_S4_01_1_0",
        profile: "DE_ABS_S4_01_1",
        image: "finish_2/DE_S4_01.jpg",
        mat_thk: "19",
      },
    },
    {
      value: "DE_VN_HGS_MDF_S4_02_19",
      label: "MILK OAK 1",
      data: {
        collections: [
          "COLLECTION_01",
          "COLLECTION_02",
          "COLLECTION_03",
          "COLLECTION_04",
        ],
        material: "DE_VN_HGS_MDF_S4_02_19",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "DE_VNR_DLV_S4_02_1_0",
        profile: "DE_ABS_S4_02_1",
        image: "finish_2/DE_S4_02.jpg",
      },
    },
    {
      value: "DE_VN_HGS_MDF_S4_04_19",
      label: "IVORY OAK",
      data: {
        collections: ["COLLECTION_02", "COLLECTION_04"],
        material: "DE_VN_HGS_MDF_S4_04_19",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "DE_VNR_DLV_S4_04_1_0",
        profile: "DE_ABS_S4_04_1",
        image: "finish_2/DE_S4_04.jpg",
      },
    },
    {
      value: "DE_VN_HGS_MDF_S4_05_19",
      label: "IVORY INFINITE OAK 1",
      data: {
        collections: [
          "COLLECTION_01",
          "COLLECTION_02",
          "COLLECTION_03",
          "COLLECTION_04",
        ],
        material: "DE_VN_HGS_MDF_S4_05_19",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "DE_VNR_DLV_S4_05_1_0",
        profile: "DE_ABS_S4_05_1",
        image: "finish_2/DE_S4_05.jpg",
      },
    },
    {
      value: "DE_VN_HGS_MDF_S4_06_19",
      label: "CHENE NAT 1",
      data: {
        collections: [
          "COLLECTION_01",
          "COLLECTION_02",
          "COLLECTION_03",
          "COLLECTION_04",
        ],
        material: "DE_VN_HGS_MDF_S4_06_19",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "DE_VNR_DLV_S4_06_1_0",
        profile: "DE_ABS_S4_06_1",
        image: "finish_2/DE_S4_06.jpg",
      },
    },
    {
      value: "DE_VN_HGS_MDF_S4_07_19",
      label: "FROZEN WALNUT 1",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02", "COLLECTION_04"],
        material: "DE_VN_HGS_MDF_S4_07_19",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "DE_VNR_DLV_S4_07_1_0",
        profile: "DE_ABS_S4_07_1",
        image: "finish_2/DE_S4_07.jpg",
      },
    },
    {
      value: "DE_VN_HGS_MDF_S4_08_19",
      label: "MANHATTAN OAK",
      data: {
        collections: ["COLLECTION_02", "COLLECTION_04"],
        material: "DE_VN_HGS_MDF_S4_08_19",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "DE_VNR_DLV_S4_08_1_0",
        profile: "DE_ABS_S4_08_1",
        image: "finish_2/DE_S4_08.jpg",
      },
    },
    {
      value: "DE_VN_HGS_MDF_S4_09_19",
      label: "DESERT OAK 1",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02", "COLLECTION_04"],
        material: "DE_VN_HGS_MDF_S4_09_19",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "DE_VNR_DLV_S4_09_1_0",
        profile: "DE_ABS_S4_09_1",
        image: "finish_2/DE_S4_09.jpg",
      },
    },
    {
      value: "DE_VN_HGS_MDF_S4_14_19",
      label: "PURE WALNUT",
      data: {
        collections: ["COLLECTION_02", "COLLECTION_04"],
        material: "DE_VN_HGS_MDF_S4_14_19",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "DE_VNR_DLV_S4_14_1_0",
        profile: "DE_ABS_S4_14_1",
        image: "finish_2/DE_S4_14.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_00025_CST_18",
      label: "Unilin 00025 CST",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_00025_CST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_00025_CST_0_7",
        profile: "UN_ABS_00025_CST",
        image: "finish_2/UN_00025_CST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_MDF_00113_MST_18",
      label: "Unilin 00113 MST",
      data: {
        collections: ["COLLECTION_01"],
        material: "UN_EV_HGS_MDF_00113_MST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_00113_MST_0_7",
        profile: "UN_ABS_00113_MST",
        image: "finish_2/UN_00113_MST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_00113_W06_18",
      label: "Unilin 00113 W06",
      data: {
        collections: ["COLLECTION_01"],
        material: "UN_EV_HGS_PBO_00113_W06_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_00113_W06_0_7",
        profile: "UN_ABS_00113_W06",
        image: "finish_2/UN_00113_W06.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_00551_CST_18",
      label: "Unilin 00551 CST",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_00551_CST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_00551_CST_0_7",
        profile: "UN_ABS_00551_CST",
        image: "finish_2/UN_00551_CST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_00625_CST_18",
      label: "Unilin 00625 CST",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_00625_CST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_00625_CST_0_7",
        profile: "UN_ABS_00625_CST",
        image: "finish_2/UN_00625_CST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0H251_W06_18",
      label: "Unilin 0H251 W06",
      data: {
        collections: ["COLLECTION_02", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0H251_W06_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0H251_W06_0_7",
        profile: "UN_ABS_0H251_W06",
        image: "finish_2/UN_0H251_W06.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0H362_BST_18",
      label: "Unilin 0H362 BST",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0H362_BST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0H362_BST_0_7",
        profile: "UN_ABS_0H362_BST",
        image: "finish_2/UN_0H362_BST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0H591_W07_18",
      label: "Unilin 0H591 W07",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0H591_W07_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0H591_W07_0_7",
        profile: "UN_ABS_0H591_W07",
        image: "finish_2/UN_0H591_W07.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0H593_W07_18",
      label: "Unilin 0H593 W07",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0H593_W07_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0H593_W07_0_7",
        profile: "UN_ABS_0H593_W07",
        image: "finish_2/UN_0H593_W07.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0H594_W07_18",
      label: "Unilin 0H594 W07",
      data: {
        collections: ["COLLECTION_02", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0H594_W07_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0H594_W07_0_7",
        profile: "UN_ABS_0H594_W07",
        image: "finish_2/UN_0H594_W07.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0H596_W07_18",
      label: "Unilin 0H596 W07",
      data: {
        collections: [
          "COLLECTION_01",
          "COLLECTION_02",
          "COLLECTION_03",
          "COLLECTION_04",
        ],
        material: "UN_EV_HGS_PBO_0H596_W07_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0H596_W07_0_7",
        profile: "UN_ABS_0H596_W07",
        image: "finish_2/UN_0H596_W07.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0H597_W07_18",
      label: "Unilin 0H597 W07",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0H597_W07_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0H597_W07_0_7",
        profile: "UN_ABS_0H597_W07",
        image: "finish_2/UN_0H597_W07.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0H598_W07_18",
      label: "Unilin 0H598 W07",
      data: {
        collections: ["COLLECTION_02", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0H598_W07_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0H598_W07_0_7",
        profile: "UN_ABS_0H598_W07",
        image: "finish_2/UN_0H598_W07.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0H720_BST_18",
      label: "Unilin 0H720 BST",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0H720_BST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0H720_BST_0_7",
        profile: "UN_ABS_0H720_BST",
        image: "finish_2/UN_0H720_BST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0H912_V2A_18",
      label: "Unilin 0H912 V2A",
      data: {
        collections: ["COLLECTION_02", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0H912_V2A_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0H912_V2A_0_7",
        profile: "UN_ABS_0H912_V2A",
        image: "finish_2/UN_0H912_V2A.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0H914_V2A_18",
      label: "Unilin 0H914 V2A",
      data: {
        collections: ["COLLECTION_02", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0H914_V2A_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0H914_V2A_0_7",
        profile: "UN_ABS_0H914_V2A",
        image: "finish_2/UN_0H914_V2A.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0H915_V2A_18",
      label: "Unilin 0H915 V2A",
      data: {
        collections: [
          "COLLECTION_01",
          "COLLECTION_02",
          "COLLECTION_03",
          "COLLECTION_04",
        ],
        material: "UN_EV_HGS_PBO_0H915_V2A_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0H915_V2A_0_7",
        profile: "UN_ABS_0H915_V2A",
        image: "finish_2/UN_0H915_V2A.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0H922_V2A_18",
      label: "Unilin 0H922 V2A",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02", "COLLECTION_03"],
        material: "UN_EV_HGS_PBO_0H922_V2A_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0H922_V2A_0_7",
        profile: "UN_ABS_0H922_V2A",
        image: "finish_2/UN_0H922_V2A.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0H925_V2A_18",
      label: "Unilin 0H925 V2A",
      data: {
        collections: ["COLLECTION_02"],
        material: "UN_EV_HGS_PBO_0H925_V2A_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0H925_V2A_0_7",
        profile: "UN_ABS_0H925_V2A",
        image: "finish_2/UN_0H925_V2A.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0H926_V2A_18",
      label: "Unilin 0H926 V2A",
      data: {
        collections: ["COLLECTION_02"],
        material: "UN_EV_HGS_PBO_0H926_V2A_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0H926_V2A_0_7",
        profile: "UN_ABS_0H926_V2A",
        image: "finish_2/UN_0H926_V2A.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0H927_V2A_18",
      label: "Unilin 0H927 V2A",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02", "COLLECTION_03"],
        material: "UN_EV_HGS_PBO_0H927_V2A_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0H927_V2A_0_7",
        profile: "UN_ABS_0H927_V2A",
        image: "finish_2/UN_0H927_V2A.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U115_CST_18",
      label: "Unilin 0U115 CST",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0U115_CST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U115_CST_0_7",
        profile: "UN_ABS_0U115_CST",
        image: "finish_2/UN_0U115_CST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U127_CST_18",
      label: "Unilin 0U127 CST",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0U127_CST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U127_CST_0_7",
        profile: "UN_ABS_0U127_CST",
        image: "finish_2/UN_0U127_CST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U139_BST_18",
      label: "Unlin 0U139 BST",
      data: {
        collections: ["COLLECTION_03", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0U139_BST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U139_BST_0_7",
        profile: "UN_ABS_0U139_BST",
        image: "finish_2/UN_0U139_BST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U141_BST_18",
      label: "Unlin 0U141 BST",
      data: {
        collections: ["COLLECTION_03", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0U141_BST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U141_BST_0_7",
        profile: "UN_ABS_0U141_BST",
        image: "finish_2/UN_0U141_BST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_MDF_0U146_CST_18",
      label: "Unilin 0U146 CST",
      data: {
        collections: ["COLLECTION_01"],
        material: "UN_EV_HGS_MDF_0U146_CST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U146_CST_0_7",
        profile: "UN_ABS_0U146_CST",
        image: "finish_2/UN_0U146_CST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U147_CST_18",
      label: "Unilin 0U147 CST",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0U147_CST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U147_CST_0_7",
        profile: "UN_ABS_0U147_CST",
        image: "finish_2/UN_0U147_CST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_MDF_0U147_MST_18",
      label: "Unilin 0U147 MST",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02"],
        material: "UN_EV_HGS_MDF_0U147_MST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U147_MST_0_7",
        profile: "UN_ABS_0U147_MST",
        image: "finish_2/UN_0U147_MST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U150_BST_18",
      label: "Unlin 0U150 BST",
      data: {
        collections: ["COLLECTION_03"],
        material: "UN_EV_HGS_PBO_0U150_BST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U150_BST_0_7",
        profile: "UN_ABS_0U150_BST",
        image: "finish_2/UN_0U150_BST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U172_CST_18",
      label: "Unlin 0U172 CST",
      data: {
        collections: ["COLLECTION_03"],
        material: "UN_EV_HGS_PBO_0U172_CST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U172_CST_0_7",
        profile: "UN_ABS_0U172_CST",
        image: "finish_2/UN_0U172_CST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U222_CST_18",
      label: "Unilin 0U222 CST",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0U222_CST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U222_CST_0_7",
        profile: "UN_ABS_0U222_CST",
        image: "finish_2/UN_0U222_CST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U271_CST_18",
      label: "Unilin 0U271 CST",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0U271_CST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U271_CST_0_7",
        profile: "UN_ABS_0U271_CST",
        image: "finish_2/UN_0U271_CST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U284_CST_18",
      label: "Unilin 0U284 CST",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0U284_CST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U284_CST_0_7",
        profile: "UN_ABS_0U284_CST",
        image: "finish_2/UN_0U284_CST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U287_CST_18",
      label: "Unilin 0U287 CST",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0U287_CST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U287_CST_0_7",
        profile: "UN_ABS_0U287_CST",
        image: "finish_2/UN_0U287_CST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U310_BST_18",
      label: "Unlin 0U310 BST",
      data: {
        collections: ["COLLECTION_03", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0U310_BST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U310_BST_0_7",
        profile: "UN_ABS_0U310_BST",
        image: "finish_2/UN_0U310_BST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U311_BST_18",
      label: "Unlin 0U311 BST",
      data: {
        collections: ["COLLECTION_03", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0U311_BST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U311_BST_0_7",
        profile: "UN_ABS_0U311_BST",
        image: "finish_2/UN_0U311_BST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U312_BST_18",
      label: "Unlin 0U312 BST",
      data: {
        collections: ["COLLECTION_03", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0U312_BST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U312_BST_0_7",
        profile: "UN_ABS_0U312_BST",
        image: "finish_2/UN_0U312_BST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U313_BST_18",
      label: "Unlin 0U313 BST",
      data: {
        collections: ["COLLECTION_03"],
        material: "UN_EV_HGS_PBO_0U313_BST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U313_BST_0_7",
        profile: "UN_ABS_0U313_BST",
        image: "finish_2/UN_0U313_BST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U641_BST_18",
      label: "Unlin 0U641 BST",
      data: {
        collections: ["COLLECTION_03", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0U641_BST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U641_BST_0_7",
        profile: "UN_ABS_0U641_BST",
        image: "finish_2/UN_0U641_BST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U642_BST_18",
      label: "Unlin 0U642 BST",
      data: {
        collections: ["COLLECTION_03"],
        material: "UN_EV_HGS_PBO_0U642_BST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U642_BST_0_7",
        profile: "UN_ABS_0U642_BST",
        image: "finish_2/UN_0U642_BST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U643_BST_18",
      label: "Unlin 0U643 BST",
      data: {
        collections: ["COLLECTION_03", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0U643_BST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U643_BST_0_7",
        profile: "UN_ABS_0U643_BST",
        image: "finish_2/UN_0U643_BST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U645_BST_18",
      label: "Unlin 0U645 BST",
      data: {
        collections: ["COLLECTION_03", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0U645_BST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U645_BST_0_7",
        profile: "UN_ABS_0U645_BST",
        image: "finish_2/UN_0U645_BST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U646_BST_18",
      label: "Unlin 0U646 BST",
      data: {
        collections: ["COLLECTION_03"],
        material: "UN_EV_HGS_PBO_0U646_BST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U646_BST_0_7",
        profile: "UN_ABS_0U646_BST",
        image: "finish_2/UN_0U646_BST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U647_BST_18",
      label: "Unlin 0U647 BST",
      data: {
        collections: ["COLLECTION_03"],
        material: "UN_EV_HGS_PBO_0U647_BST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U647_BST_0_7",
        profile: "UN_ABS_0U647_BST",
        image: "finish_2/UN_0U647_BST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U648_BST_18",
      label: "Unlin 0U648 BST",
      data: {
        collections: ["COLLECTION_03", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0U648_BST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U648_BST_0_7",
        profile: "UN_ABS_0U648_BST",
        image: "finish_2/UN_0U648_BST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U651_BST_18",
      label: "Unlin 0U651 BST",
      data: {
        collections: ["COLLECTION_03", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0U651_BST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U651_BST_0_7",
        profile: "UN_ABS_0U651_BST",
        image: "finish_2/UN_0U651_BST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U653_BST_18",
      label: "Unlin 0U653 BST",
      data: {
        collections: ["COLLECTION_03", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0U653_BST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U653_BST_0_7",
        profile: "UN_ABS_0U653_BST",
        image: "finish_2/UN_0U653_BST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U655_CST_18",
      label: "Unilin 0U655 CST",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0U655_CST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U655_CST_0_7",
        profile: "UN_ABS_0U655_CST",
        image: "finish_2/UN_0U655_CST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U656_BST_18",
      label: "Unlin 0U656 BST",
      data: {
        collections: ["COLLECTION_03", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0U656_BST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U656_BST_0_7",
        profile: "UN_ABS_0U656_BST",
        image: "finish_2/UN_0U656_BST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U813_BST_18",
      label: "Unlin 0U813 BST",
      data: {
        collections: ["COLLECTION_03", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0U813_BST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U813_BST_0_7",
        profile: "UN_ABS_0U813_BST",
        image: "finish_2/UN_0U813_BST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U814_BST_18",
      label: "Unlin 0U814 BST",
      data: {
        collections: ["COLLECTION_03"],
        material: "UN_EV_HGS_PBO_0U814_BST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U814_BST_0_7",
        profile: "UN_ABS_0U814_BST",
        image: "finish_2/UN_0U814_BST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U815_BST_18",
      label: "Unlin 0U815 BST",
      data: {
        collections: ["COLLECTION_03", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0U815_BST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U815_BST_0_7",
        profile: "UN_ABS_0U815_BST",
        image: "finish_2/UN_0U815_BST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U817_BST_18",
      label: "Unlin 0U817 BST",
      data: {
        collections: ["COLLECTION_03"],
        material: "UN_EV_HGS_PBO_0U817_BST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U817_BST_0_7",
        profile: "UN_ABS_0U817_BST",
        image: "finish_2/UN_0U817_BST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U818_BST_18",
      label: "Unlin 0U818 BST",
      data: {
        collections: ["COLLECTION_03", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0U818_BST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U818_BST_0_7",
        profile: "UN_ABS_0U818_BST",
        image: "finish_2/UN_0U818_BST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U820_BST_18",
      label: "Unlin 0U820 BST",
      data: {
        collections: ["COLLECTION_03", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0U820_BST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U820_BST_0_7",
        profile: "UN_ABS_0U820_BST",
        image: "finish_2/UN_0U820_BST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U821_BST_18",
      label: "Unlin 0U821 BST",
      data: {
        collections: ["COLLECTION_03", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0U821_BST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U821_BST_0_7",
        profile: "UN_ABS_0U821_BST",
        image: "finish_2/UN_0U821_BST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U822_BST_18",
      label: "Unlin 0U822 BST",
      data: {
        collections: ["COLLECTION_03", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0U822_BST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U822_BST_0_7",
        profile: "UN_ABS_0U822_BST",
        image: "finish_2/UN_0U822_BST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U823_CST_18",
      label: "Unilin 0U823 CST",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0U823_CST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U823_CST_0_7",
        profile: "UN_ABS_0U823_CST",
        image: "finish_2/UN_0U823_CST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_MDF_0U827_MST_18",
      label: "Unilin 0U827 MST",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02"],
        material: "UN_EV_HGS_MDF_0U827_MST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U827_MST_0_7",
        profile: "UN_ABS_0U827_MST",
        image: "finish_2/UN_0U827_MST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_MDF_0U828_MST_18",
      label: "Unlin 0U828 MST",
      data: {
        collections: ["COLLECTION_03"],
        material: "UN_EV_HGS_MDF_0U828_MST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U828_MST_0_7",
        profile: "UN_ABS_0U828_MST",
        image: "finish_2/UN_0U828_MST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_MDF_0U829_MST_18",
      label: "Unlin 0U829 MST",
      data: {
        collections: ["COLLECTION_03"],
        material: "UN_EV_HGS_MDF_0U829_MST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U829_MST_0_7",
        profile: "UN_ABS_0U829_MST",
        image: "finish_2/UN_0U829_MST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_MDF_0U830_MST_18",
      label: "Unlin 0U830 MST",
      data: {
        collections: ["COLLECTION_03"],
        material: "UN_EV_HGS_MDF_0U830_MST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0U830_MST_0_7",
        profile: "UN_ABS_0U830_MST",
        image: "finish_2/UN_0U830_MST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0UD59_BST_18",
      label: "Unlin 0UD59 BST",
      data: {
        collections: ["COLLECTION_03", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0UD59_BST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0UD59_BST_0_7",
        profile: "UN_ABS_0UD59_BST",
        image: "finish_2/UN_0UD59_BST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0UD81_CST_18",
      label: "Unilin 0UD81 CST",
      data: {
        collections: ["COLLECTION_01"],
        material: "UN_EV_HGS_PBO_0UD81_CST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0UD81_CST_0_7",
        profile: "UN_ABS_0UD81_CST",
        image: "finish_2/UN_0UD81_CST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_MDF_0UD81_MST_18",
      label: "Unilin 0UD81 MST",
      data: {
        collections: ["COLLECTION_01"],
        material: "UN_EV_HGS_MDF_0UD81_MST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0UD81_MST_0_7",
        profile: "UN_ABS_0UD81_MST",
        image: "finish_2/UN_0UD81_MST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0WE26_CST_18",
      label: "Unilin 0WE26 CST",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0WE26_CST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0WE26_CST_0_7",
        profile: "UN_ABS_0WE26_CST",
        image: "finish_2/UN_0WE26_CST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0WE28_CST_18",
      label: "Unilin 0WE28 CST",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0WE28_CST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0WE28_CST_0_7",
        profile: "UN_ABS_0WE28_CST",
        image: "finish_2/UN_0WE28_CST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_MDF_0WE28_MST_18",
      label: "Unilin 0WE28 MST",
      data: {
        collections: ["COLLECTION_01"],
        material: "UN_EV_HGS_MDF_0WE28_MST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0WE28_MST_0_7",
        profile: "UN_ABS_0WE28_MST",
        image: "finish_2/UN_0WE28_MST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0WE31_BST_18",
      label: "UN 0WE31 BST",
      data: {
        collections: ["COLLECTION_04"],
        material: "UN_EV_HGS_PBO_0WE31_BST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0WE31_BST_0_7",
        profile: "UN_ABS_0WE31_BST",
        image: "finish_2/UN_0WE31_BST.jpg",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0WE31_CST_18",
      label: "Unilin 0WE31 CST",
      data: {
        collections: ["COLLECTION_01"],
        material: "UN_EV_HGS_PBO_0WE31_CST_18",
        drawer_material: "UN_RW_HGS_MDFFB_12",
        surface: "NO_SURF",
        drawer_surface: "UN_HPL_HGP_0WE31_CST_0_7",
        profile: "UN_ABS_0WE31_CST",
        image: "finish_2/UN_0WE31_CST.jpg",
      },
    },
  ],
  FINISH_EXT_ITEMS: [
    {
      value: "MDF18_Prepeint_BO_COAT_WD_BT_1230_BOM_BO_COAT_WD_BT_1230_BOM",
      label: "BT230",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_03", "COLLECTION_04"],
        front: [
          "FA_01_LAQ",
          "FA_02_LAQ",
          "FA_03_LAQ",
          "FA_04_LAQ",
          "FA_05_LAQ",
          "FA_06_LAQ",
          "FA_07_LAQ",
          "FA_08_LAQ",
          "FA_09_LAQ",
          "FA_10_LAQ",
          "FA_11_LAQ",
          "FA_12_LAQ",
          "FA_13_LAQ",
          "FA_14_LAQ",
        ],
        material: "MDF18_Prepeint",
        drawer_material: "MDF18_Prepeint",
        surface_top: "BO_COAT_WD_BT_1230_BOM",
        surface_bot: "BO_COAT_WD_BT_1230_BOM",
        profile: "PRF_00",
        image: "finish_2/BO_BT_12_30.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "MDF18_Prepeint_BO_COAT_WD_BT_1231_BOM_BO_COAT_WD_BT_1231_BOM",
      label: "BT231",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_04"],
        front: [
          "FA_01_LAQ",
          "FA_02_LAQ",
          "FA_03_LAQ",
          "FA_04_LAQ",
          "FA_05_LAQ",
          "FA_06_LAQ",
          "FA_07_LAQ",
          "FA_08_LAQ",
          "FA_09_LAQ",
          "FA_11_LAQ",
          "FA_12_LAQ",
          "FA_13_LAQ",
          "FA_14_LAQ",
        ],
        material: "MDF18_Prepeint",
        drawer_material: "MDF18_Prepeint",
        surface_top: "BO_COAT_WD_BT_1231_BOM",
        surface_bot: "BO_COAT_WD_BT_1231_BOM",
        profile: "PRF_00",
        image: "finish_2/BO_BT_12_31.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "MDF18_Prepeint_BO_COAT_WD_TC_31_BOM_BO_COAT_WD_TC_31_BOM",
      label: "TC 31",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_04"],
        front: [
          "FA_01_LAQ",
          "FA_02_LAQ",
          "FA_03_LAQ",
          "FA_04_LAQ",
          "FA_05_LAQ",
          "FA_06_LAQ",
          "FA_07_LAQ",
          "FA_08_LAQ",
          "FA_09_LAQ",
          "FA_11_LAQ",
          "FA_12_LAQ",
          "FA_13_LAQ",
          "FA_14_LAQ",
        ],
        material: "MDF18_Prepeint",
        drawer_material: "MDF18_Prepeint",
        surface_top: "BO_COAT_WD_TC_31_BOM",
        surface_bot: "BO_COAT_WD_TC_31_BOM",
        profile: "PRF_00",
        image: "finish_2/BO_TC_31.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "MDF18_Prepeint_BO_COAT_WD_TC_32_BOM_BO_COAT_WD_TC_32_BOM",
      label: "TC 32",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_03", "COLLECTION_04"],
        front: [
          "FA_01_LAQ",
          "FA_02_LAQ",
          "FA_03_LAQ",
          "FA_04_LAQ",
          "FA_05_LAQ",
          "FA_06_LAQ",
          "FA_07_LAQ",
          "FA_08_LAQ",
          "FA_09_LAQ",
          "FA_10_LAQ",
          "FA_11_LAQ",
          "FA_12_LAQ",
          "FA_13_LAQ",
          "FA_14_LAQ",
        ],
        material: "MDF18_Prepeint",
        drawer_material: "MDF18_Prepeint",
        surface_top: "BO_COAT_WD_TC_32_BOM",
        surface_bot: "BO_COAT_WD_TC_32_BOM",
        profile: "PRF_00",
        image: "finish_2/BO_TC_32.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "MDF18_Prepeint_BO_COAT_WD_TC_53_BOM_BO_COAT_WD_TC_53_BOM",
      label: "TC 53",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02", "COLLECTION_04"],
        front: [
          "FA_01_LAQ",
          "FA_02_LAQ",
          "FA_03_LAQ",
          "FA_04_LAQ",
          "FA_05_LAQ",
          "FA_06_LAQ",
          "FA_07_LAQ",
          "FA_08_LAQ",
          "FA_09_LAQ",
          "FA_11_LAQ",
          "FA_12_LAQ",
          "FA_13_LAQ",
          "FA_14_LAQ",
        ],
        material: "MDF18_Prepeint",
        drawer_material: "MDF18_Prepeint",
        surface_top: "BO_COAT_WD_TC_53_BOM",
        surface_bot: "BO_COAT_WD_TC_53_BOM",
        profile: "PRF_00",
        image: "finish_2/BO_TC_53.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "MDF18_Prepeint_BO_COAT_WD_TC_54_BOM_BO_COAT_WD_TC_54_BOM",
      label: "TC 54",
      data: {
        collections: [
          "COLLECTION_01",
          "COLLECTION_02",
          "COLLECTION_03",
          "COLLECTION_04",
        ],
        front: [
          "FA_01_LAQ",
          "FA_02_LAQ",
          "FA_03_LAQ",
          "FA_04_LAQ",
          "FA_05_LAQ",
          "FA_06_LAQ",
          "FA_07_LAQ",
          "FA_08_LAQ",
          "FA_09_LAQ",
          "FA_10_LAQ",
          "FA_11_LAQ",
          "FA_12_LAQ",
          "FA_13_LAQ",
          "FA_14_LAQ",
        ],
        material: "MDF18_Prepeint",
        drawer_material: "MDF18_Prepeint",
        surface_top: "BO_COAT_WD_TC_54_BOM",
        surface_bot: "BO_COAT_WD_TC_54_BOM",
        profile: "PRF_00",
        image: "finish_2/BO_TC_54.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "MDF18_Prepeint_BO_COAT_WD_TC_6_BOM_BO_COAT_WD_TC_6_BOM",
      label: "TC 6",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_03", "COLLECTION_04"],
        front: [
          "FA_01_LAQ",
          "FA_02_LAQ",
          "FA_03_LAQ",
          "FA_04_LAQ",
          "FA_05_LAQ",
          "FA_06_LAQ",
          "FA_07_LAQ",
          "FA_08_LAQ",
          "FA_09_LAQ",
          "FA_10_LAQ",
          "FA_11_LAQ",
          "FA_12_LAQ",
          "FA_13_LAQ",
          "FA_14_LAQ",
        ],
        material: "MDF18_Prepeint",
        drawer_material: "MDF18_Prepeint",
        surface_top: "BO_COAT_WD_TC_6_BOM",
        surface_bot: "BO_COAT_WD_TC_6_BOM",
        profile: "PRF_00",
        image: "finish_2/BO_TC_6.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "MDF18_Prepeint_BO_COAT_WD_TC_7_BOM_BO_COAT_WD_TC_7_BOM",
      label: "TC 7",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_04"],
        front: [
          "FA_01_LAQ",
          "FA_02_LAQ",
          "FA_03_LAQ",
          "FA_04_LAQ",
          "FA_05_LAQ",
          "FA_06_LAQ",
          "FA_07_LAQ",
          "FA_08_LAQ",
          "FA_09_LAQ",
          "FA_11_LAQ",
          "FA_12_LAQ",
          "FA_13_LAQ",
          "FA_14_LAQ",
        ],
        material: "MDF18_Prepeint",
        drawer_material: "MDF18_Prepeint",
        surface_top: "BO_COAT_WD_TC_7_BOM",
        surface_bot: "BO_COAT_WD_TC_7_BOM",
        profile: "PRF_00",
        image: "finish_2/BO_TC_7.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "MDF18_Prepeint_BO_COAT_WD_TC_88_BOM_BO_COAT_WD_TC_88_BOM",
      label: "TC 88",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_04"],
        front: [
          "FA_01_LAQ",
          "FA_02_LAQ",
          "FA_03_LAQ",
          "FA_04_LAQ",
          "FA_05_LAQ",
          "FA_06_LAQ",
          "FA_07_LAQ",
          "FA_08_LAQ",
          "FA_09_LAQ",
          "FA_11_LAQ",
          "FA_12_LAQ",
          "FA_13_LAQ",
          "FA_14_LAQ",
        ],
        material: "MDF18_Prepeint",
        drawer_material: "MDF18_Prepeint",
        surface_top: "BO_COAT_WD_TC_88_BOM",
        surface_bot: "BO_COAT_WD_TC_88_BOM",
        profile: "PRF_00",
        image: "finish_2/BO_TC_88.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "MDF18_Prepeint_BO_COAT_WD_WE_181_BOM_BO_COAT_WD_WE_181_BOM",
      label: "WE81",
      data: {
        collections: [
          "COLLECTION_01",
          "COLLECTION_02",
          "COLLECTION_03",
          "COLLECTION_04",
        ],
        front: [
          "FA_01_LAQ",
          "FA_02_LAQ",
          "FA_03_LAQ",
          "FA_04_LAQ",
          "FA_05_LAQ",
          "FA_06_LAQ",
          "FA_07_LAQ",
          "FA_08_LAQ",
          "FA_09_LAQ",
          "FA_10_LAQ",
          "FA_11_LAQ",
          "FA_12_LAQ",
          "FA_13_LAQ",
          "FA_14_LAQ",
        ],
        material: "MDF18_Prepeint",
        drawer_material: "MDF18_Prepeint",
        surface_top: "BO_COAT_WD_WE_181_BOM",
        surface_bot: "BO_COAT_WD_WE_181_BOM",
        profile: "PRF_00",
        image: "finish_2/BO_WE_181.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "MDF18_Prepeint_BO_COAT_WD_WE_M14_BOM_BO_COAT_WD_WE_M14_BOM",
      label: "WE M14",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_04"],
        front: [
          "FA_01_LAQ",
          "FA_02_LAQ",
          "FA_03_LAQ",
          "FA_04_LAQ",
          "FA_05_LAQ",
          "FA_06_LAQ",
          "FA_07_LAQ",
          "FA_08_LAQ",
          "FA_09_LAQ",
          "FA_11_LAQ",
          "FA_12_LAQ",
          "FA_13_LAQ",
          "FA_14_LAQ",
        ],
        material: "MDF18_Prepeint",
        drawer_material: "MDF18_Prepeint",
        surface_top: "BO_COAT_WD_WE_M14_BOM",
        surface_bot: "BO_COAT_WD_WE_M14_BOM",
        profile: "PRF_00",
        image: "finish_2/BO_WE_M14.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "MDF18_Prepeint_BO_COAT_WD_WE_M205_BOM_BO_COAT_WD_WE_M205_BOM",
      label: "WE M205",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02", "COLLECTION_04"],
        front: [
          "FA_01_LAQ",
          "FA_02_LAQ",
          "FA_03_LAQ",
          "FA_04_LAQ",
          "FA_05_LAQ",
          "FA_06_LAQ",
          "FA_07_LAQ",
          "FA_08_LAQ",
          "FA_09_LAQ",
          "FA_11_LAQ",
          "FA_12_LAQ",
          "FA_13_LAQ",
          "FA_14_LAQ",
        ],
        material: "MDF18_Prepeint",
        drawer_material: "MDF18_Prepeint",
        surface_top: "BO_COAT_WD_WE_M205_BOM",
        surface_bot: "BO_COAT_WD_WE_M205_BOM",
        profile: "PRF_00",
        image: "finish_2/BO_WE_M205.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "MDF18_Prepeint_BO_COAT_WD_WE_M226_BOM_BO_COAT_WD_WE_M226_BOM",
      label: "WE M226",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_04"],
        front: [
          "FA_01_LAQ",
          "FA_02_LAQ",
          "FA_03_LAQ",
          "FA_04_LAQ",
          "FA_05_LAQ",
          "FA_06_LAQ",
          "FA_07_LAQ",
          "FA_08_LAQ",
          "FA_09_LAQ",
          "FA_11_LAQ",
          "FA_12_LAQ",
          "FA_13_LAQ",
          "FA_14_LAQ",
        ],
        material: "MDF18_Prepeint",
        drawer_material: "MDF18_Prepeint",
        surface_top: "BO_COAT_WD_WE_M226_BOM",
        surface_bot: "BO_COAT_WD_WE_M226_BOM",
        profile: "PRF_00",
        image: "finish_2/BO_WE_M226.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "MDF18_Prepeint_BO_COAT_WD_WE_Y64_BOM_BO_COAT_WD_WE_Y64_BOM",
      label: "WE Y64",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_04"],
        front: [
          "FA_01_LAQ",
          "FA_02_LAQ",
          "FA_03_LAQ",
          "FA_04_LAQ",
          "FA_05_LAQ",
          "FA_06_LAQ",
          "FA_07_LAQ",
          "FA_08_LAQ",
          "FA_09_LAQ",
          "FA_11_LAQ",
          "FA_12_LAQ",
          "FA_13_LAQ",
          "FA_14_LAQ",
        ],
        material: "MDF18_Prepeint",
        drawer_material: "MDF18_Prepeint",
        surface_top: "BO_COAT_WD_WE_Y64_BOM",
        surface_bot: "BO_COAT_WD_WE_Y64_BOM",
        profile: "PRF_00",
        image: "finish_2/BO_WE_Y64.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "MDF18_Prepeint_BO_COAT_WD_WE_Y77_BOM_BO_COAT_WD_WE_Y77_BOM",
      label: "WE Y77",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_04"],
        front: [
          "FA_01_LAQ",
          "FA_02_LAQ",
          "FA_03_LAQ",
          "FA_04_LAQ",
          "FA_05_LAQ",
          "FA_06_LAQ",
          "FA_07_LAQ",
          "FA_08_LAQ",
          "FA_09_LAQ",
          "FA_11_LAQ",
          "FA_12_LAQ",
          "FA_13_LAQ",
          "FA_14_LAQ",
        ],
        material: "MDF18_Prepeint",
        drawer_material: "MDF18_Prepeint",
        surface_top: "BO_COAT_WD_WE_Y77_BOM",
        surface_bot: "BO_COAT_WD_WE_Y77_BOM",
        profile: "PRF_00",
        image: "finish_2/BO_WE_Y77.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "MDF18_Prepeint_BO_COAT_WD_WE_Y78_BOM_BO_COAT_WD_WE_Y78_BOM",
      label: "WE Y78",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_04"],
        front: [
          "FA_01_LAQ",
          "FA_02_LAQ",
          "FA_03_LAQ",
          "FA_04_LAQ",
          "FA_05_LAQ",
          "FA_06_LAQ",
          "FA_07_LAQ",
          "FA_08_LAQ",
          "FA_09_LAQ",
          "FA_11_LAQ",
          "FA_12_LAQ",
          "FA_13_LAQ",
          "FA_14_LAQ",
        ],
        material: "MDF18_Prepeint",
        drawer_material: "MDF18_Prepeint",
        surface_top: "BO_COAT_WD_WE_Y78_BOM",
        surface_bot: "BO_COAT_WD_WE_Y78_BOM",
        profile: "PRF_00",
        image: "finish_2/BO_WE_Y78.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "MDF18_Prepeint_BO_COAT_WD_WE_Y79_BOM_BO_COAT_WD_WE_Y79_BOM",
      label: "WE Y79",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_04"],
        front: [
          "FA_01_LAQ",
          "FA_02_LAQ",
          "FA_03_LAQ",
          "FA_04_LAQ",
          "FA_05_LAQ",
          "FA_06_LAQ",
          "FA_07_LAQ",
          "FA_08_LAQ",
          "FA_09_LAQ",
          "FA_11_LAQ",
          "FA_12_LAQ",
          "FA_13_LAQ",
          "FA_14_LAQ",
        ],
        material: "MDF18_Prepeint",
        drawer_material: "MDF18_Prepeint",
        surface_top: "BO_COAT_WD_WE_Y79_BOM",
        surface_bot: "BO_COAT_WD_WE_Y79_BOM",
        profile: "PRF_00",
        image: "finish_2/BO_WE_Y79.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "MDF18_Prepeint_BO_COAT_WD_WE_Y85_BOM_BO_COAT_WD_WE_Y85_BOM",
      label: "WE Y85",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02", "COLLECTION_04"],
        front: [
          "FA_01_LAQ",
          "FA_02_LAQ",
          "FA_03_LAQ",
          "FA_04_LAQ",
          "FA_05_LAQ",
          "FA_06_LAQ",
          "FA_07_LAQ",
          "FA_08_LAQ",
          "FA_09_LAQ",
          "FA_11_LAQ",
          "FA_12_LAQ",
          "FA_13_LAQ",
          "FA_14_LAQ",
        ],
        material: "MDF18_Prepeint",
        drawer_material: "MDF18_Prepeint",
        surface_top: "BO_COAT_WD_WE_Y85_BOM",
        surface_bot: "BO_COAT_WD_WE_Y85_BOM",
        profile: "PRF_00",
        image: "finish_2/BO_WE_Y85.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "MDF18_Prepeint_BO_COAT_WD_WE_Y86_BOM_BO_COAT_WD_WE_Y86_BOM",
      label: "WE Y86",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02", "COLLECTION_04"],
        front: [
          "FA_01_LAQ",
          "FA_02_LAQ",
          "FA_03_LAQ",
          "FA_04_LAQ",
          "FA_05_LAQ",
          "FA_06_LAQ",
          "FA_07_LAQ",
          "FA_08_LAQ",
          "FA_09_LAQ",
          "FA_11_LAQ",
          "FA_12_LAQ",
          "FA_13_LAQ",
          "FA_14_LAQ",
        ],
        material: "MDF18_Prepeint",
        drawer_material: "MDF18_Prepeint",
        surface_top: "BO_COAT_WD_WE_Y86_BOM",
        surface_bot: "BO_COAT_WD_WE_Y86_BOM",
        profile: "PRF_00",
        image: "finish_2/BO_WE_Y86.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "MDF18_Prepeint_BO_COAT_WD_WE_Y87_BOM_BO_COAT_WD_WE_Y87_BOM",
      label: "WE Y87",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02", "COLLECTION_04"],
        front: [
          "FA_01_LAQ",
          "FA_02_LAQ",
          "FA_03_LAQ",
          "FA_04_LAQ",
          "FA_05_LAQ",
          "FA_06_LAQ",
          "FA_07_LAQ",
          "FA_08_LAQ",
          "FA_09_LAQ",
          "FA_11_LAQ",
          "FA_12_LAQ",
          "FA_13_LAQ",
          "FA_14_LAQ",
        ],
        material: "MDF18_Prepeint",
        drawer_material: "MDF18_Prepeint",
        surface_top: "BO_COAT_WD_WE_Y87_BOM",
        surface_bot: "BO_COAT_WD_WE_Y87_BOM",
        profile: "PRF_00",
        image: "finish_2/BO_WE_Y87.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "MDF18_Prepeint_BO_COAT_WD_WE_Z116_BOM_BO_COAT_WD_WE_Z116_BOM",
      label: "WE Z116",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_04"],
        front: [
          "FA_01_LAQ",
          "FA_02_LAQ",
          "FA_03_LAQ",
          "FA_04_LAQ",
          "FA_05_LAQ",
          "FA_06_LAQ",
          "FA_07_LAQ",
          "FA_08_LAQ",
          "FA_09_LAQ",
          "FA_11_LAQ",
          "FA_12_LAQ",
          "FA_13_LAQ",
          "FA_14_LAQ",
        ],
        material: "MDF18_Prepeint",
        drawer_material: "MDF18_Prepeint",
        surface_top: "BO_COAT_WD_WE_Z116_BOM",
        surface_bot: "BO_COAT_WD_WE_Z116_BOM",
        profile: "PRF_00",
        image: "finish_2/BO_WE_Z116.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "MDF18_Prepeint_COAT_WD_9005_MAT_BOM_COAT_WD_9005_MAT_BOM",
      label: "9005 MAT",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_04"],
        front: [
          "FA_01_LAQ",
          "FA_02_LAQ",
          "FA_03_LAQ",
          "FA_04_LAQ",
          "FA_05_LAQ",
          "FA_06_LAQ",
          "FA_07_LAQ",
          "FA_08_LAQ",
          "FA_09_LAQ",
          "FA_11_LAQ",
          "FA_12_LAQ",
          "FA_13_LAQ",
          "FA_14_LAQ",
        ],
        material: "MDF18_Prepeint",
        drawer_material: "MDF18_Prepeint",
        surface_top: "COAT_WD_9005_MAT_BOM",
        surface_bot: "COAT_WD_9005_MAT_BOM",
        profile: "PRF_00",
        image: "finish_2/9005_MAT.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "MDF18_Prepeint_COAT_WD_9016_MAT_BOM_COAT_WD_9016_MAT_BOM",
      label: "9016 MAT",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_04"],
        front: [
          "FA_01_LAQ",
          "FA_02_LAQ",
          "FA_03_LAQ",
          "FA_04_LAQ",
          "FA_05_LAQ",
          "FA_06_LAQ",
          "FA_07_LAQ",
          "FA_08_LAQ",
          "FA_09_LAQ",
          "FA_11_LAQ",
          "FA_12_LAQ",
          "FA_13_LAQ",
          "FA_14_LAQ",
        ],
        material: "MDF18_Prepeint",
        drawer_material: "MDF18_Prepeint",
        surface_top: "COAT_WD_9016_MAT_BOM",
        surface_bot: "COAT_WD_9016_MAT_BOM",
        profile: "PRF_00",
        image: "finish_2/9016_MAT.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "MDF18_Prepeint_COAT_WD_9021_MAT_BOM_COAT_WD_9021_MAT_BOM",
      label: "9021 MAT",
      data: {
        collections: [
          "COLLECTION_01",
          "COLLECTION_02",
          "COLLECTION_03",
          "COLLECTION_04",
        ],
        front: [
          "FA_01_LAQ",
          "FA_02_LAQ",
          "FA_03_LAQ",
          "FA_04_LAQ",
          "FA_05_LAQ",
          "FA_06_LAQ",
          "FA_07_LAQ",
          "FA_08_LAQ",
          "FA_09_LAQ",
          "FA_10_LAQ",
          "FA_11_LAQ",
          "FA_12_LAQ",
          "FA_13_LAQ",
          "FA_14_LAQ",
        ],
        material: "MDF18_Prepeint",
        drawer_material: "MDF18_Prepeint",
        surface_top: "COAT_WD_9021_MAT_BOM",
        surface_bot: "COAT_WD_9021_MAT_BOM",
        profile: "PRF_00",
        image: "finish_2/9021_MAT.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "UN_EV_HGS_MDF_00113_MST_18_NO_SURF_NO_SURF",
      label: "Unilin 00113 MST",
      data: {
        collections: ["COLLECTION_01"],
        front: ["FA_01_MEL"],
        material: "UN_EV_HGS_MDF_00113_MST_18",
        drawer_material: "UN_EV_HGS_MDF_00113_MST_18",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "UN_ABS_00113_MST",
        image: "finish_2/UN_00113_MST.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "UN_EV_HGS_MDF_0U146_CST_18_NO_SURF_NO_SURF",
      label: "Unilin 0U146 CST",
      data: {
        collections: ["COLLECTION_01"],
        front: ["FA_01_MEL"],
        material: "UN_EV_HGS_MDF_0U146_CST_18",
        drawer_material: "UN_EV_HGS_MDF_0U146_CST_18",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "UN_ABS_0U146_CST",
        image: "finish_2/UN_0U146_CST.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "UN_EV_HGS_MDF_0U147_MST_18_NO_SURF_NO_SURF",
      label: "Unilin 0U147 MST",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02"],
        front: ["FA_01_MEL"],
        material: "UN_EV_HGS_MDF_0U147_MST_18",
        drawer_material: "UN_EV_HGS_MDF_0U147_MST_18",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "UN_ABS_0U147_MST",
        image: "finish_2/UN_0U147_MST.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "UN_EV_HGS_MDF_0U827_MST_18_NO_SURF_NO_SURF",
      label: "Unilin 0U827 MST",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02"],
        front: ["FA_01_MEL"],
        material: "UN_EV_HGS_MDF_0U827_MST_18",
        drawer_material: "UN_EV_HGS_MDF_0U827_MST_18",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "UN_ABS_0U827_MST",
        image: "finish_2/UN_0U827_MST.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "UN_EV_HGS_MDF_0UD81_MST_18_NO_SURF_NO_SURF",
      label: "Unilin 0UD81 MST",
      data: {
        collections: ["COLLECTION_01"],
        front: ["FA_01_MEL"],
        material: "UN_EV_HGS_MDF_0UD81_MST_18",
        drawer_material: "UN_EV_HGS_MDF_0UD81_MST_18",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "UN_ABS_0UD81_MST",
        image: "finish_2/UN_0UD81_MST.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "UN_EV_HGS_MDF_0WE28_MST_18_NO_SURF_NO_SURF",
      label: "Unilin 0WE28 MST",
      data: {
        collections: ["COLLECTION_01"],
        front: ["FA_01_MEL"],
        material: "UN_EV_HGS_MDF_0WE28_MST_18",
        drawer_material: "UN_EV_HGS_MDF_0WE28_MST_18",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "UN_ABS_0WE28_MST",
        image: "finish_2/UN_0WE28_MST.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "UN_EV_HGS_PBO_00025_CST_18_NO_SURF_NO_SURF",
      label: "Unilin 00025 CST",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02"],
        front: ["FA_01_MEL"],
        material: "UN_EV_HGS_PBO_00025_CST_18",
        drawer_material: "UN_EV_HGS_PBO_00025_CST_18",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "UN_ABS_00025_CST",
        image: "finish_2/UN_00025_CST.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "UN_EV_HGS_PBO_00113_W06_18_NO_SURF_NO_SURF",
      label: "Unilin 00113 W06",
      data: {
        collections: ["COLLECTION_01"],
        front: ["FA_01_MEL"],
        material: "UN_EV_HGS_PBO_00113_W06_18",
        drawer_material: "UN_EV_HGS_PBO_00113_W06_18",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "UN_ABS_00113_W06",
        image: "finish_2/UN_00113_W06.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "UN_EV_HGS_PBO_00551_CST_18_NO_SURF_NO_SURF",
      label: "Unilin 00551 CST",
      data: {
        collections: ["COLLECTION_01"],
        front: ["FA_01_MEL"],
        material: "UN_EV_HGS_PBO_00551_CST_18",
        drawer_material: "UN_EV_HGS_PBO_00551_CST_18",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "UN_ABS_00551_CST",
        image: "finish_2/UN_00551_CST.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "UN_EV_HGS_PBO_00625_CST_18_NO_SURF_NO_SURF",
      label: "Unilin 00625 CST",
      data: {
        collections: ["COLLECTION_01"],
        front: ["FA_01_MEL"],
        material: "UN_EV_HGS_PBO_00625_CST_18",
        drawer_material: "UN_EV_HGS_PBO_00625_CST_18",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "UN_ABS_00625_CST",
        image: "finish_2/UN_00625_CST.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0H362_BST_18_NO_SURF_NO_SURF",
      label: "Unilin 0H362 BST",
      data: {
        collections: ["COLLECTION_01"],
        front: ["FA_01_MEL"],
        material: "UN_EV_HGS_PBO_0H362_BST_18",
        drawer_material: "UN_EV_HGS_PBO_0H362_BST_18",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "UN_ABS_0H362_BST",
        image: "finish_2/UN_0H362_BST.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0H591_W07_18_NO_SURF_NO_SURF",
      label: "Unilin 0H591 W07",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02"],
        front: ["FA_01_MEL"],
        material: "UN_EV_HGS_PBO_0H591_W07_18",
        drawer_material: "UN_EV_HGS_PBO_0H591_W07_18",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "UN_ABS_0H591_W07",
        image: "finish_2/UN_0H591_W07.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0H593_W07_18_NO_SURF_NO_SURF",
      label: "Unilin 0H593 W07",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02"],
        front: ["FA_01_MEL"],
        material: "UN_EV_HGS_PBO_0H593_W07_18",
        drawer_material: "UN_EV_HGS_PBO_0H593_W07_18",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "UN_ABS_0H593_W07",
        image: "finish_2/UN_0H593_W07.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0H596_W07_18_NO_SURF_NO_SURF",
      label: "Unilin 0H596 W07",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02", "COLLECTION_03"],
        front: ["FA_01_MEL"],
        material: "UN_EV_HGS_PBO_0H596_W07_18",
        drawer_material: "UN_EV_HGS_PBO_0H596_W07_18",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "UN_ABS_0H596_W07",
        image: "finish_2/UN_0H596_W07.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0H597_W07_18_NO_SURF_NO_SURF",
      label: "Unilin 0H597 W07",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02"],
        front: ["FA_01_MEL"],
        material: "UN_EV_HGS_PBO_0H597_W07_18",
        drawer_material: "UN_EV_HGS_PBO_0H597_W07_18",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "UN_ABS_0H597_W07",
        image: "finish_2/UN_0H597_W07.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0H720_BST_18_NO_SURF_NO_SURF",
      label: "Unilin 0H720 BST",
      data: {
        collections: ["COLLECTION_01"],
        front: ["FA_01_MEL"],
        material: "UN_EV_HGS_PBO_0H720_BST_18",
        drawer_material: "UN_EV_HGS_PBO_0H720_BST_18",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "UN_ABS_0H720_BST",
        image: "finish_2/UN_0H720_BST.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0H915_V2A_18_NO_SURF_NO_SURF",
      label: "Unilin 0H915 V2A",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02", "COLLECTION_03"],
        front: ["FA_01_MEL"],
        material: "UN_EV_HGS_PBO_0H915_V2A_18",
        drawer_material: "UN_EV_HGS_PBO_0H915_V2A_18",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "UN_ABS_0H915_V2A",
        image: "finish_2/UN_0H915_V2A.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0H922_V2A_18_NO_SURF_NO_SURF",
      label: "Unilin 0H922 V2A",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02", "COLLECTION_03"],
        front: ["FA_01_MEL"],
        material: "UN_EV_HGS_PBO_0H922_V2A_18",
        drawer_material: "UN_EV_HGS_PBO_0H922_V2A_18",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "UN_ABS_0H922_V2A",
        image: "finish_2/UN_0H922_V2A.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0H927_V2A_18_NO_SURF_NO_SURF",
      label: "Unilin 0H927 V2A",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02", "COLLECTION_03"],
        front: ["FA_01_MEL"],
        material: "UN_EV_HGS_PBO_0H927_V2A_18",
        drawer_material: "UN_EV_HGS_PBO_0H927_V2A_18",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "UN_ABS_0H927_V2A",
        image: "finish_2/UN_0H927_V2A.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U115_CST_18_NO_SURF_NO_SURF",
      label: "Unilin 0U115 CST",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02"],
        front: ["FA_01_MEL"],
        material: "UN_EV_HGS_PBO_0U115_CST_18",
        drawer_material: "UN_EV_HGS_PBO_0U115_CST_18",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "UN_ABS_0U115_CST",
        image: "finish_2/UN_0U115_CST.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U127_CST_18_NO_SURF_NO_SURF",
      label: "Unilin 0U127 CST",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02"],
        front: ["FA_01_MEL"],
        material: "UN_EV_HGS_PBO_0U127_CST_18",
        drawer_material: "UN_EV_HGS_PBO_0U127_CST_18",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "UN_ABS_0U127_CST",
        image: "finish_2/UN_0U127_CST.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U147_CST_18_NO_SURF_NO_SURF",
      label: "Unilin 0U147 CST",
      data: {
        collections: ["COLLECTION_01"],
        front: ["FA_01_MEL"],
        material: "UN_EV_HGS_PBO_0U147_CST_18",
        drawer_material: "UN_EV_HGS_PBO_0U147_CST_18",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "UN_ABS_0U147_CST",
        image: "finish_2/UN_0U147_CST.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U222_CST_18_NO_SURF_NO_SURF",
      label: "Unilin 0U222 CST",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02"],
        front: ["FA_01_MEL"],
        material: "UN_EV_HGS_PBO_0U222_CST_18",
        drawer_material: "UN_EV_HGS_PBO_0U222_CST_18",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "UN_ABS_0U222_CST",
        image: "finish_2/UN_0U222_CST.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U271_CST_18_NO_SURF_NO_SURF",
      label: "Unilin 0U271 CST",
      data: {
        collections: ["COLLECTION_01"],
        front: ["FA_01_MEL"],
        material: "UN_EV_HGS_PBO_0U271_CST_18",
        drawer_material: "UN_EV_HGS_PBO_0U271_CST_18",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "UN_ABS_0U271_CST",
        image: "finish_2/UN_0U271_CST.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U284_CST_18_NO_SURF_NO_SURF",
      label: "Unilin 0U284 CST",
      data: {
        collections: ["COLLECTION_01"],
        front: ["FA_01_MEL"],
        material: "UN_EV_HGS_PBO_0U284_CST_18",
        drawer_material: "UN_EV_HGS_PBO_0U284_CST_18",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "UN_ABS_0U284_CST",
        image: "finish_2/UN_0U284_CST.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U287_CST_18_NO_SURF_NO_SURF",
      label: "Unilin 0U287 CST",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02"],
        front: ["FA_01_MEL"],
        material: "UN_EV_HGS_PBO_0U287_CST_18",
        drawer_material: "UN_EV_HGS_PBO_0U287_CST_18",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "UN_ABS_0U287_CST",
        image: "finish_2/UN_0U287_CST.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U655_CST_18_NO_SURF_NO_SURF",
      label: "Unilin 0U655 CST",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02"],
        front: ["FA_01_MEL"],
        material: "UN_EV_HGS_PBO_0U655_CST_18",
        drawer_material: "UN_EV_HGS_PBO_0U655_CST_18",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "UN_ABS_0U655_CST",
        image: "finish_2/UN_0U655_CST.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0U823_CST_18_NO_SURF_NO_SURF",
      label: "Unilin 0U823 CST",
      data: {
        collections: ["COLLECTION_01"],
        front: ["FA_01_MEL"],
        material: "UN_EV_HGS_PBO_0U823_CST_18",
        drawer_material: "UN_EV_HGS_PBO_0U823_CST_18",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "UN_ABS_0U823_CST",
        image: "finish_2/UN_0U823_CST.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0UD81_CST_18_NO_SURF_NO_SURF",
      label: "Unilin 0UD81 CST",
      data: {
        collections: ["COLLECTION_01"],
        front: ["FA_01_MEL"],
        material: "UN_EV_HGS_PBO_0UD81_CST_18",
        drawer_material: "UN_EV_HGS_PBO_0UD81_CST_18",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "UN_ABS_0UD81_CST",
        image: "finish_2/UN_0UD81_CST.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0WE26_CST_18_NO_SURF_NO_SURF",
      label: "Unilin 0WE26 CST",
      data: {
        collections: ["COLLECTION_01"],
        front: ["FA_01_MEL"],
        material: "UN_EV_HGS_PBO_0WE26_CST_18",
        drawer_material: "UN_EV_HGS_PBO_0WE26_CST_18",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "UN_ABS_0WE26_CST",
        image: "finish_2/UN_0WE26_CST.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0WE28_CST_18_NO_SURF_NO_SURF",
      label: "Unilin 0WE28 CST",
      data: {
        collections: ["COLLECTION_01"],
        front: ["FA_01_MEL"],
        material: "UN_EV_HGS_PBO_0WE28_CST_18",
        drawer_material: "UN_EV_HGS_PBO_0WE28_CST_18",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "UN_ABS_0WE28_CST",
        image: "finish_2/UN_0WE28_CST.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "UN_EV_HGS_PBO_0WE31_CST_18_NO_SURF_NO_SURF",
      label: "Unilin 0WE31 CST",
      data: {
        collections: ["COLLECTION_01"],
        front: ["FA_01_MEL"],
        material: "UN_EV_HGS_PBO_0WE31_CST_18",
        drawer_material: "UN_EV_HGS_PBO_0WE31_CST_18",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "UN_ABS_0WE31_CST",
        image: "finish_2/UN_0WE31_CST.jpg",
        mat_fr_thk: "18",
        srf_fr_thk: "0",
        filler_thk: "18",
      },
    },
    {
      value: "WC_VN_HGS_MDF_01_19_NO_SURF_NO_SURF",
      label: "BONDI OAK",
      data: {
        collections: [
          "COLLECTION_01",
          "COLLECTION_02",
          "COLLECTION_03",
          "COLLECTION_04",
        ],
        front: ["FA_01_VNR", "FA_07_VNR"],
        material: "WC_VN_HGS_MDF_01_19",
        drawer_material: "WC_VN_HGS_MDF_01_19",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "BONDI_OAK_1",
        image: "finish_2/BONDI_OAK_1.jpg",
        mat_fr_thk: "19",
        srf_fr_thk: "0",
        filler_thk: "19",
      },
    },
    {
      value: "WC_VN_HGS_MDF_02_19_NO_SURF_NO_SURF",
      label: "MILK OAK",
      data: {
        collections: [
          "COLLECTION_01",
          "COLLECTION_02",
          "COLLECTION_03",
          "COLLECTION_04",
        ],
        front: ["FA_01_VNR", "FA_07_VNR"],
        material: "WC_VN_HGS_MDF_02_19",
        drawer_material: "WC_VN_HGS_MDF_02_19",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "MILK_OAK_1",
        image: "finish_2/MILK_OAK_1.jpg",
        mat_fr_thk: "19",
        srf_fr_thk: "0",
        filler_thk: "19",
      },
    },
    {
      value: "WC_VN_HGS_MDF_05_19_NO_SURF_NO_SURF",
      label: "IVORY INFINITE OAK",
      data: {
        collections: [
          "COLLECTION_01",
          "COLLECTION_02",
          "COLLECTION_03",
          "COLLECTION_04",
        ],
        front: ["FA_01_VNR", "FA_07_VNR"],
        material: "WC_VN_HGS_MDF_05_19",
        drawer_material: "WC_VN_HGS_MDF_05_19",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "IVORY_INFINITE_OAK_1",
        image: "finish_2/IVORY_INFINITE_OAK_1.jpg",
        mat_fr_thk: "19",
        srf_fr_thk: "0",
        filler_thk: "19",
      },
    },
    {
      value: "WC_VN_HGS_MDF_06_19_NO_SURF_NO_SURF",
      label: "CHENE NAT",
      data: {
        collections: [
          "COLLECTION_01",
          "COLLECTION_02",
          "COLLECTION_03",
          "COLLECTION_04",
        ],
        front: ["FA_01_VNR", "FA_07_VNR"],
        material: "WC_VN_HGS_MDF_06_19",
        drawer_material: "WC_VN_HGS_MDF_06_19",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "CHENE_NAT_1",
        image: "finish_2/CHENE_NAT_1.jpg",
        mat_fr_thk: "19",
        srf_fr_thk: "0",
        filler_thk: "19",
      },
    },
    {
      value: "WC_VN_HGS_MDF_07_19_NO_SURF_NO_SURF",
      label: "FROZEN WALNUT",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02", "COLLECTION_04"],
        front: ["FA_01_VNR", "FA_07_VNR"],
        material: "WC_VN_HGS_MDF_07_19",
        drawer_material: "WC_VN_HGS_MDF_07_19",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "FROZEN_WALNUT_1",
        image: "finish_2/FROZEN_WALNUT_1.jpg",
        mat_fr_thk: "19",
        srf_fr_thk: "0",
        filler_thk: "19",
      },
    },
    {
      value: "WC_VN_HGS_MDF_09_19_NO_SURF_NO_SURF",
      label: "DESERT OAK",
      data: {
        collections: ["COLLECTION_01", "COLLECTION_02", "COLLECTION_04"],
        front: ["FA_01_VNR", "FA_07_VNR"],
        material: "WC_VN_HGS_MDF_09_19",
        drawer_material: "WC_VN_HGS_MDF_09_19",
        surface_top: "NO_SURF",
        surface_bot: "NO_SURF",
        profile: "DESERT_OAK_1",
        image: "finish_2/DESERT_OAK_1.jpg",
        mat_fr_thk: "19",
        srf_fr_thk: "0",
        filler_thk: "19",
      },
    },
  ],
  PULL_ITEMS: [
    {
      value: "COLLECTION_01_JO_HN_J1201GA",
      label: "Verve",
      data: {
        collection: "COLLECTION_01",
        image: "pulls/J-1201-GA.png",
        description: "Jolie Design boutons Verve J-1201-GA",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_01_FR_HN_H100102075",
      label: "TORNADO 1001-020 »Noir Mat",
      data: {
        collection: "COLLECTION_01",
        image: "pulls/H100102075.png",
        description: "Frost TORNADO 1001-020  noir mat",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_01_FI_HN_010200128EI",
      label: "Model10",
      data: {
        collection: "COLLECTION_01",
        image: "pulls/010.200.128.EI.png",
        description: "FITGRIP Handle 010 Oak",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_01_FI_HN_006200128EI",
      label: "Model 06",
      data: {
        collection: "COLLECTION_01",
        image: "pulls/006.200.128.EI.png",
        description: "FITGRIP Handle 06 Oak",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_01_FI_HN_005300224EI",
      label: "Model 05",
      data: {
        collection: "COLLECTION_01",
        image: "pulls/005.300.224.EI.png",
        description: "FITGRIP Handle 05 Oak",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_01_BE_HN_87720950",
      label: "Ryan",
      data: {
        collection: "COLLECTION_01",
        image: "pulls/8772-0950.png",
        description: "Berma Boutons RYAN noir mat",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_01_BE_HN_87720250",
      label: "GRONT-T",
      data: {
        collection: "COLLECTION_01",
        image: "pulls/8772-0250.png",
        description: "Berma Boutons GRONT-T noir mat",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_01_BE_HN_87756922",
      label: "Blox",
      data: {
        collection: "COLLECTION_01",
        image: "pulls/8775-6922.png",
        description: "Berma Boutons BLOX or brossé",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_01_BE_HN_87756921",
      label: "Blox",
      data: {
        collection: "COLLECTION_01",
        image: "pulls/8775-6921.png",
        description: "Berma Boutons BLOX noir mat",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_01_FU_HN_82000153",
      label: "Elan",
      data: {
        collection: "COLLECTION_01",
        image: "pulls/8200-0153.png",
        description: "Furnipart ELAN WOOD chêne laqué",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_01_FU_HN_82000148",
      label: "Elan",
      data: {
        collection: "COLLECTION_01",
        image: "pulls/8200-0148.png",
        description: "Furnipart ELAN WOOD chêne laqué",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_01_BE_HN_89605108",
      label: "Angle wood",
      data: {
        collection: "COLLECTION_01",
        image: "pulls/8960-5108.png",
        description: "Berma ANGLE WOOD chêne natural non laqué",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_01_HE_HN_9345371",
      label: "Almus",
      data: {
        collection: "COLLECTION_01",
        image: "pulls/9345371.png",
        description: "Hettich Bouton Almus, H 23 mm, ø 12 mm, noir mat",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_04_FR_HN_H100102001",
      label: "TORNADO 1001-020 » INOX BROSSÉ",
      data: {
        collection: "COLLECTION_04",
        image: "pulls/H100102001.png",
        description: "Frost TORNADO 1001-020 Inox brossé",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_04_FR_HN_H2520352C10",
      label: "ARKI+® 352C » BROSSÉ",
      data: {
        collection: "COLLECTION_04",
        image: "pulls/H2520352C10.png",
        description: "Frost ARKI 352C brossé",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_04_JO_HN_J0805OS",
      label: "A symm",
      data: {
        collection: "COLLECTION_04",
        image: "pulls/J-0805-OS.png",
        description: "Jolie Design A SYMM old silver",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_04_BE_HN_81601925",
      label: "Vilnus",
      data: {
        collection: "COLLECTION_04",
        image: "pulls/8160-1925.png",
        description: "Berma Boutons VILNIUS diamètre 25 inox brossé",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_04_HA_HN_15501370",
      label: "Hafele",
      data: {
        collection: "COLLECTION_04",
        image: "pulls/155.01.370 .png",
        description:
            "Poignée de meuble, poignée forme D en acier inox, anguleux, Häfele Déco  A : 126 mm,  B : 24 mm,  C : 96 mm ",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_04_FU_HN_82000128",
      label: "Edge-Straight",
      data: {
        collection: "COLLECTION_04",
        image: "pulls/8200-0128.png",
        description: "Furnipart  EDGE STRAIGHT blanc mat",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_04_BE_HN_87604922",
      label: "Drimo",
      data: {
        collection: "COLLECTION_04",
        image: "pulls/8760-4922.png",
        description: "Berma DRIMO aspect inox brossé",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_04_VI_HN_87752192",
      label: "Flapp",
      data: {
        collection: "COLLECTION_04",
        image: "pulls/8775-2192.png",
        description: "Viefe FLAPP aspect inos brossé",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_04_VI_HN_87548716",
      label: "Dino",
      data: {
        collection: "COLLECTION_04",
        image: "pulls/8754-8716.png",
        description: "Viefe DINO noir mat",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_04_VI_HN_87757040",
      label: "Curve",
      data: {
        collection: "COLLECTION_04",
        image: "pulls/8775-7040.png",
        description: "Viefe CURVE gris brossé",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_04_JO_HN_J2306GA",
      label: "Vierge",
      data: {
        collection: "COLLECTION_04",
        image: "pulls/J-2306-GA.png",
        description: "Jolie Design VIERGE aged gold",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_04_FU_HN_87772200",
      label: "Tuba",
      data: {
        collection: "COLLECTION_04",
        image: "pulls/8777-2200.png",
        description: "Vonsild by Furnipart TUBA chêne natural non laqué",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_04_FU_HN_87772201",
      label: "Tuba",
      data: {
        collection: "COLLECTION_04",
        image: "pulls/8777-2201.png",
        description: "Vonsild by Furnipart TUBA chêne natural non laqué",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_04_LO_HN_LUNA_PULL_BRASS",
      label: "Luna Pull Brass",
      data: {
        collection: "COLLECTION_04",
        image: "pulls/Luna Pull Brass laiton.png",
        description: "Lo & Co Luna Pull Brass laiton",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_04_FU_HN_87771506",
      label: "Archive",
      data: {
        collection: "COLLECTION_04",
        image: "pulls/8777-1506.png",
        description: "Vonsild by Furnipart ARCHIVE chêne laqué",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_FR_HN_H100102001",
      label: "TORNADO 1001-020 » INOX BROSSÉ",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/H100102001.png",
        description: "Frost TORNADO 1001-020 Inox brossé",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_JO_HN_J1409OS",
      label: "Rebel",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/J-1409-OS.png",
        description: "Jolie Design REBEL old silver",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_JO_HN_J1409BK",
      label: "Rebel",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/J-1409-BK.png",
        description: "Jolie Design REBEL black",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_MI_HN_601134SGL",
      label: "Monaco",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/601-134-S-GL.png",
        description: "Minimaro Leather Loops MONACO-1-PURE 601-134-S-GL",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_JO_HN_J0403OS",
      label: "Essence",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/J-0403-OS.png",
        description: "Jolie Design ESSENCE old silver",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_FR_HN_H303722410",
      label: "DUNA 3037-224 » BROSSÉ",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/H303722410.png",
        description: "Frost DUNA 3037-224 brossé",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_JO_HN_J0203OS",
      label: "Core",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/J-0203-OS.png",
        description: "Jolie Design CORE old silver ",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_JO_HN_J0203BK",
      label: "Core",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/J-0203-BK.png",
        description: "Jolie Design CORE black ",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_FR_HN_H101812875",
      label: "BEAT 1018-128 » NOIR MAT",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/H101812875.png",
        description: "Frost BEAT 1018-128 noir mat",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_FR_HN_H101812801",
      label: "BEAT 1018-128 » INOX BROSSÉ",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/H101812801.png",
        description: "Frost BEAT 1018-128 inox brossé",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_FR_HN_H2520352C75",
      label: "ARKI+® 352C » noir mat",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/H2520352C75.png",
        description: "FROST ARKI 352C noir mat",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_FR_HN_H2520352C10",
      label: "ARKI+® 352C » BROSSÉ",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/H2520352C10.png",
        description: "FROST ARKI 352C brossé",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_JO_HN_J0805BK",
      label: "A symm",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/J-0805-BK.png",
        description: "Jolie Design A SYMM black",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_BE_HN_81601914",
      label: "Vilnus",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/8160-1914.png",
        description: "Berma Boutons VILNIUS diamètre 14 inox brossé",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_FU_HN_87772003",
      label: "Tuba",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/8777-2003.png",
        description: "Vonsild by Furnipart PINTA  chêne laqué",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_BE_HN_87781092",
      label: "Square",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/8778-1092.png",
        description: "Roberto Marella by Berma SQUARE noir métallisé",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_FU_HN_87772004",
      label: "Pinta",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/8777-2004.png",
        description: "Vonsild by Furnipart PINTA chêne laqué",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_HA_HN_15501370",
      label: "Hafele",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/155.01.370 .png",
        description:
            "Häfele poignée forme D en acier inox, anguleux,  A : 126 mm,  B : 24 mm,  C : 96 mm ",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_FU_HN_82000127",
      label: "Edge-Straight",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/8200-0127.png",
        description: "Furnipart EDGE STRAIGHT noir brossé + mat",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_FU_HN_BOU816016MC",
      label: "E-code CS9",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/BOU816016MC.png",
        description: "Funipart Bouton cuir SAFARI marron clair",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_FU_HN_BOU816016NO",
      label: "E-code CS10",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/BOU816016NO.png",
        description: "Funipart Bouton cuir SAFARI noir",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_BE_HN_87781202",
      label: "Drop",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/8778-1202.png",
        description: "Roberto Marella by Berma DROPP noir métallisé",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_BE_HN_87604816",
      label: "Drimo",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/8760-4816.png",
        description: "Berma DRIMO noir MAT",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_BE_HN_83900191",
      label: "Doha",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/8390-0191.png",
        description: "Berma DOHA inox brossé",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_FU_HN_82048207",
      label: "8204-8143",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/8204-8207.png",
        description: "Furnipart FLAT aspect inox brossé",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_FU_HN_82048144",
      label: "8204-8142",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/8204-8144.png",
        description: "Furnipart FLAT aspect noir mat",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_HA_HN_15501400",
      label: "155.01.400",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/155.01.400.png",
        description:
            "Häfele poignée en acier inox, ronde diamètre 12 mm, A : 136 mm, dim. B : 35 mm, dim. C : 96 mm, mat brossé, avec 2 socles",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_HA_HN_11076011",
      label: "110.76.011",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/110.76.011.png",
        description:
            "Häfele poignée coudée en cuir, socle en alliage zingué,  marron foncé, socle : aspect inox",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_BE_HN_87781230",
      label: "Passante",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/8778-1230.png",
        description: "Roberto Marella by Berma PASSANTE noir métallisé",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_VI_HN_87757720",
      label: "Luv Wood",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/8775-7720.png",
        description: "Viefe LUV WOOD chêne laqué",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_VI_HN_87752039",
      label: "Luv",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/8775-2039.png",
        description: "Viefe LUV noir mat",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_VI_HN_0404070P2627",
      label: "Flexa",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/0404070P2627.png",
        description: "Viefe FLEXA Beige + laiton brossé",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_VI_HN_87752154",
      label: "Flapp",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/8775-2154.png",
        description: "Viefe FLAPP noir brossé",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_VI_HN_87548717",
      label: "Dino",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/8754-8717.png",
        description: "Viefe DINO noir mat",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_02_VI_HN_87757060",
      label: "Curve",
      data: {
        collection: "COLLECTION_02",
        image: "pulls/8775-7060.png",
        description: "Viefe CURVE noir mat",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_03_JO_HN_J1201BK",
      label: "Verve",
      data: {
        collection: "COLLECTION_03",
        image: "pulls/J-1201-BK.png",
        description: "Jolie Design VERVE black ",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_03_JO_HN_J0901GA",
      label: "Sphere",
      data: {
        collection: "COLLECTION_03",
        image: "pulls/J-0901-GA.png",
        description: "Jole Design SPHERE black ",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_03_CO_HN_14132",
      label: "Harper",
      data: {
        collection: "COLLECTION_03",
        image: "pulls/Laiton Ancien14132.png",
        description: "Corston Harper Poignée de Meuble en T Petite",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_03_CO_HN_10160",
      label: "Cup handle",
      data: {
        collection: "COLLECTION_03",
        image: "pulls/Laiton Ancien10160.png",
        description: "Corston Elm Poignées Coquilles Petites",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_03_JO_HN_J0100BK",
      label: "Cross",
      data: {
        collection: "COLLECTION_03",
        image: "pulls/J-0100-BK.png",
        description: "Jole Design CROSS black ",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_03_JO_HN_J0100GA",
      label: "Cross",
      data: {
        collection: "COLLECTION_03",
        image: "pulls/J-0100-GA.png",
        description: "Jole Design CROSS aged gold ",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_03_CO_HN_17753",
      label: "Bayswater",
      data: {
        collection: "COLLECTION_03",
        image: "pulls/Laiton Ancien17753.png",
        description: "Corston Bayswater Moyen Bouton de Meuble Laiton Ancien",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_03_BE_HN_87722937",
      label: "Padin",
      data: {
        collection: "COLLECTION_03",
        image: "pulls/8772-2937.png",
        description: "Berma PADIN noir mat ",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_03_BE_HN_84240336",
      label: "Ivrine",
      data: {
        collection: "COLLECTION_03",
        image: "pulls/8424-0336.png",
        description: "Berma IRVINE noir mat",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_03_BE_HN_81061100",
      label: "Fuxin",
      data: {
        collection: "COLLECTION_03",
        image: "pulls/8106-1100.png",
        description: "Berma Cuvettes FUXIN",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_03_FU_HN_82250047",
      label: "Born",
      data: {
        collection: "COLLECTION_03",
        image: "pulls/8225-0047.png",
        description: "Furnipart Bouton BARON or brossé",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_03_FU_HN_82250048",
      label: "Born",
      data: {
        collection: "COLLECTION_03",
        image: "pulls/8225-0048.png",
        description: "Furnipart Bouton BARON noir mat",
        prefered_position: "NaN",
      },
    },
    {
      value: "COLLECTION_03_LO_HN_ASCOT_KNOB_AGED_BRASS",
      label: "Ascot Knob Aged Brass",
      data: {
        collection: "COLLECTION_03",
        image: "pulls/Ascot Knob Aged Brass.png",
        description: "Lo & Co Ascot Knob Brass",
        prefered_position: "NaN",
      },
    },
  ],
  SINGLE_DOUBLE: [
    {
      label: "Single",
      value: "1",
      data: {
        image: "door_type/SINGLE.png",
      },
    },
    {
      label: "Double",
      value: "2",
      data: {
        image: "door_type/DOUBLE.png",
      },
    },
  ],
  HINGE_SIDE: [
    {
      label: "Left",
      value: "LEFT",
      data: {
        image: "door_type/LEFT.png",
        hinge_side_nbr: "0",
      },
    },
    {
      label: "Right",
      value: "RIGHT",
      data: {
        image: "door_type/RIGHT.png",
        hinge_side_nbr: "1",
      },
    },
  ],
};

const form: FormConfig = {
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
    C1_FS_Right: "CS_LA_CLAMEX_14_FS_BOT",
  },
  props: {
    variant: "buttons",
    fullWidth: true,
  },
  children: [
    {
      type: "TAB",
      render: "SECTION",
      name: "overview",
      label: "Overview",
      goToZone: "0",
      children: [
        {
          type: "NONE",
          render: "SECTION",
          name: "form",
          label: "Form",
          children: [
            {
              type: "COMBO",
              render: "FIELD",
              name: "INSTALLATION_TYPE",
              label: "Installation type",
              defaultValue: "BUILT_IN",
              props: {
                type: "SWITCH",
                layout: "HORIZONTAL",
                options: sources["INSTALLATION_TYPE_ITEMS"],
              },
              variables: [
                {
                  name: "IS_BI_L",
                  path: "$data.IS_BI_L",
                },
                {
                  name: "IS_BI_R",
                  path: "$data.IS_BI_R",
                },
              ],
            },
            {
              type: "COMBO",
              render: "FIELD",
              name: "SHAPE_LAYOUT_LEFT",
              label: "Corner usage left",
              defaultValue: "SHAPE_LAYOUT_LEFT_02",
              props: {
                type: "BUTTON",
                layout: "HORIZONTAL",
                options: sources["SHAPE_LAYOUT_LEFT_ITEMS"],
              },
              variables: [
                {
                  name: "IS_LL_P",
                  path: "$data.IS_LL_P",
                },
                {
                  name: "IS_ML_N",
                  path: "$data.IS_ML_N",
                },
              ],
            },
            {
              type: "COMBO",
              render: "FIELD",
              name: "SHAPE_LAYOUT_RIGHT",
              label: "Corner usage right",
              defaultValue: "SHAPE_LAYOUT_RIGHT_02",
              props: {
                type: "BUTTON",
                layout: "HORIZONTAL",
                options: sources["SHAPE_LAYOUT_RIGHT_ITEMS"],
              },
              variables: [
                {
                  name: "IS_RL_N",
                  path: "$data.IS_RL_N",
                },
                {
                  name: "IS_ML_P",
                  path: "$data.IS_ML_P",
                },
              ],
            },
            {
              type: "INPUT",
              render: "FIELD",
              name: "OV_HEIGHT",
              label: "Height",
              defaultValue: 3000,
              props: {
                min: 1800,
                max: 2800,
                type: "SLIDER",
              },
              variables: [
                {
                  name: "ZONE_H",
                  path: ".",
                },
              ],
            },
            {
              type: "COMBO",
              render: "FIELD",
              name: "OV_DRAWER_TYPE",
              label: "Drawer type",
              defaultValue: "INTERIOR",
              props: {
                type: "SWITCH",
                options: sources["DRAWER_TYPE_ITEMS"],
              },
            },
            {
              type: "ACCORDION",
              name: "fillers",
              label: "Fillers",
              render: "SECTION",
              children: [
                {
                  type: "INPUT",
                  render: "FIELD",
                  label: "Top",
                  name: "FILLER_TOP",
                  props: {
                    min: 30,
                    max: 500,
                    type: "SLIDER",
                  },
                  variables: [
                    {
                      name: "CROWN_HEIGHT",
                      path: ".",
                    },
                  ],
                },
                {
                  type: "INPUT",
                  render: "FIELD",
                  label: "Left",
                  name: "FILLER_LEFT",
                  props: {
                    min: 50,
                    max: 1000,
                    type: "SLIDER",
                  },
                  variables: [
                    {
                      name: "ZFL_W",
                      path: ".",
                    },
                  ],
                  dependencies: [
                    {
                      action: "SHOW",
                      roles: [
                        {
                          operator: "OR",
                          roles: [
                            {
                              leftValue: "$INSTALLATION_TYPE",
                              comparison: "=",
                              rightValue: "BUILT_IN",
                            },
                            {
                              leftValue: "$INSTALLATION_TYPE",
                              comparison: "=",
                              rightValue: "BUILT_IN_LEFT",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "INPUT",
                  render: "FIELD",
                  label: "Right",
                  name: "FILLER_RIGHT",
                  props: {
                    min: 50,
                    max: 1000,
                    type: "SLIDER",
                  },
                  variables: [
                    {
                      name: "ZFR_W",
                      path: ".",
                    },
                  ],
                  dependencies: [
                    {
                      action: "SHOW",
                      roles: [
                        {
                          operator: "OR",
                          roles: [
                            {
                              leftValue: "$INSTALLATION_TYPE",
                              comparison: "=",
                              rightValue: "BUILT_IN",
                            },
                            {
                              leftValue: "$INSTALLATION_TYPE",
                              comparison: "=",
                              rightValue: "BUILT_IN_RIGHT",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "INPUT",
                  render: "FIELD",
                  label: "Bottom",
                  name: "FILLER_BOTTOM",
                  props: {
                    min: 30,
                    max: 200,
                    type: "SLIDER",
                  },
                  variables: [
                    {
                      name: "BASE_HEIGHT",
                      path: ".",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "NONE",
          render: "SECTION",
          name: "styler",
          label: "Styler",
          children: [
            {
              type: "COMBO",
              render: "FIELD",
              name: "OV_DESIGN_STYLE",
              label: "Design collection",
              defaultValue: "STYLE_01",
              autofill: true,
              props: {
                type: "BUTTON",
                image: true,
                layout: "HORIZONTAL",
                options: sources["DESIGN_STYLE_ITEMS"],
              },
            },
            {
              type: "COMBO",
              render: "FIELD",
              name: "OV_FRONT_TYPE",
              label: "Front",
              defaultValue: "FRONT_01",
              autofill: true,
              props: {
                type: "BUTTON",
                image: true,
                layout: "HORIZONTAL",
                options: sources["FRONT_TYPE_ITEMS"],
              },
              filters: [
                {
                  roles: [
                    {
                      operator: "AND",
                      roles: [
                        {
                          leftValue: "$OV_DESIGN_STYLE",
                          comparison: "I",
                          rightValue: "$data.collections",
                        },
                      ],
                    },
                  ],
                },
              ],
              variables: [
                {
                  name: "Door_Name",
                  path: "$data.door_type",
                },
              ],
              formValues: [
                {
                  name: "OV_HAVE_PULL",
                  path: "$data.have_pull",
                },
              ],
            },
            {
              type: "COMBO",
              render: "FIELD",
              name: "OV_FINISH_EXT",
              label: "Exterior",
              autofill: true,
              props: {
                image: true,
                type: "CIRCLE",
                options: sources["FINISH_EXT_ITEMS"],
              },
              filters: [
                {
                  roles: [
                    {
                      operator: "AND",
                      roles: [
                        {
                          leftValue: "$OV_FRONT_TYPE",
                          comparison: "I",
                          rightValue: "$data.front",
                        },
                        {
                          leftValue: "$OV_DESIGN_STYLE",
                          comparison: "I",
                          rightValue: "$data.collections",
                        },
                      ],
                    },
                  ],
                },
              ],
              variables: [
                {
                  name: "MAT_FR_1",
                  path: "$data.material",
                  type: "mat",
                },
                {
                  name: "MAT_FR_1_THK",
                  path: "$data.mat_fr_thk",
                },
                {
                  name: "SRF_FR_1_TOP",
                  path: "$data.surface_top",
                  type: "surf",
                },
                {
                  name: "SRF_FR_1_BOT",
                  path: "$data.surface_bot",
                  type: "surf",
                },
                {
                  name: "SRF_FR_1_THK",
                  path: "$data.srf_fr_thk",
                },
                {
                  name: "PRF_FR_1",
                  path: "$data.profile",
                },
                {
                  name: "FI_1_THK",
                  path: "$data.filler_thk",
                },
              ],
            },
            {
              type: "COMBO",
              render: "FIELD",
              name: "OV_FINISH_INT",
              label: "Interior",
              autofill: true,
              props: {
                image: true,
                type: "CIRCLE",
                options: sources["FINISH_INT_ITEMS"],
              },
              filters: [
                {
                  roles: [
                    {
                      operator: "AND",
                      roles: [
                        {
                          leftValue: "$OV_DESIGN_STYLE",
                          comparison: "I",
                          rightValue: "$data.collections",
                        },
                      ],
                    },
                  ],
                },
              ],
              variables: [
                {
                  name: "MAT_1",
                  path: "$data.material",
                  type: "mat",
                },
                {
                  name: "MAT_1_THK",
                  path: "$data.mat_thk",
                },
                {
                  name: "MAT_DSI_1",
                  path: "$data.drawer_material",
                  type: "mat",
                },
                {
                  name: "MAT_DBK_1",
                  path: "$data.drawer_material",
                  type: "mat",
                },
                {
                  name: "SRF_1_TOP",
                  path: "$data.surface_top",
                  type: "surf",
                },
                {
                  name: "SRF_1_BOT",
                  path: "$data.surface_bot",
                  type: "surf",
                },
                {
                  name: "SRF_1_THK",
                  path: "$data.srf_thk",
                },
                {
                  name: "PRF_1",
                  path: "$data.profile",
                },
              ],
            },
            {
              type: "COMBO",
              render: "FIELD",
              name: "OV_PULL_TYPE",
              label: "Pull",
              autofill: true,
              props: {
                image: true,
                type: "BUTTON",
                layout: "HORIZONTAL",
                options: sources["PULL_ITEMS"],
              },
              filters: [
                {
                  roles: [
                    {
                      operator: "AND",
                      roles: [
                        {
                          leftValue: "$OV_DESIGN_STYLE",
                          comparison: "=",
                          rightValue: "$data.collection",
                        },
                      ],
                    },
                  ],
                },
              ],
              variables: [
                {
                  name: "Handle_Type",
                  path: "$data.handle_type",
                },
                {
                  name: "HINGE_OPTION",
                  path: "$data.hinge_option",
                },
                {
                  name: "DR_EXT_SLIDE_TYPE_01",
                  path: "$data.drawer_slide_type",
                },
              ],
              dependencies: [
                {
                  action: "SHOW",
                  roles: [
                    {
                      operator: "OR",
                      roles: [
                        {
                          leftValue: "$OV_HAVE_PULL",
                          comparison: "=",
                          rightValue: "Yes",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "TAB",
      render: "SECTION",
      name: "left",
      label: "Left",
      goToZone: "0.1.0.1.1",
      defaultVars: {
        WACA_WIDTH: "$ZL_STEP",
      },
      children: [
        {
          type: "NONE",
          render: "SECTION",
          name: "form",
          label: "Form",
          children: [
            {
              type: "INPUT",
              render: "FIELD",
              name: "ZL_WIDTH",
              label: "Width",
              defaultValue: 3200,
              props: {
                min: 400,
                max: 6000,
                type: "SLIDER",
              },
              variables: [
                {
                  name: "ZL_W",
                  path: ".",
                },
              ],
            },
            {
              type: "INPUT",
              render: "FIELD",
              name: "ZL_DEPTH",
              label: "Depth",
              defaultValue: 500,
              props: {
                min: 350,
                max: 800,
                type: "SLIDER",
              },
              variables: [
                {
                  name: "ZL_D",
                  path: ".",
                },
              ],
            },
            {
              type: "INPUT",
              render: "FIELD",
              name: "ZL_CNT",
              label: "Number of articles",
              autofill: true,
              defaultValue: 8,
              props: {
                min: "round($ZL_WIDTH/500)",
                max: "round($ZL_WIDTH/400)",
                type: "SLIDER",
              },
              variables: [
                {
                  name: "ZL_CNT",
                  path: ".",
                },
              ],
            },
            {
              type: "COMBO",
              render: "FIELD",
              name: "ZL_DRAWER_TYPE",
              label: "Drawer type",
              defaultValue: "INTERIOR",
              props: {
                type: "SWITCH",
                options: sources["DRAWER_TYPE_ITEMS"],
              },
            },
          ],
        },
        {
          type: "NONE",
          render: "SECTION",
          name: "styler",
          label: "Styler",
          children: [
            {
              type: "COMBO",
              render: "FIELD",
              name: "ZL_DESIGN_STYLE",
              label: "Design collection",
              autofill: true,
              props: {
                type: "BUTTON",
                image: true,
                layout: "HORIZONTAL",
                options: sources["DESIGN_STYLE_ITEMS"],
              },
            },
            {
              type: "COMBO",
              render: "FIELD",
              name: "ZL_FRONT_TYPE",
              label: "Front",
              autofill: true,
              props: {
                type: "BUTTON",
                image: true,
                layout: "HORIZONTAL",
                options: sources["FRONT_TYPE_ITEMS"],
              },
              filters: [
                {
                  roles: [
                    {
                      operator: "AND",
                      roles: [
                        {
                          leftValue: "$ZL_DESIGN_STYLE",
                          comparaison: "I",
                          rightValue: "$data.collections",
                        },
                      ],
                    },
                  ],
                },
              ],
              variables: [
                {
                  name: "Door_Name",
                  path: "$data.door_type",
                },
              ],
              formValues: [
                {
                  name: "ZL_HAVE_PULL",
                  path: "$data.have_pull",
                },
              ],
            },
            {
              type: "COMBO",
              render: "FIELD",
              name: "ZL_FINISH_EXT",
              label: "Exterior",
              autofill: true,
              props: {
                image: true,
                type: "CIRCLE",
                options: sources["FINISH_EXT_ITEMS"],
              },
              filters: [
                {
                  roles: [
                    {
                      operator: "AND",
                      roles: [
                        {
                          leftValue: "$ZL_FRONT_TYPE",
                          comparaison: "I",
                          rightValue: "$data.front",
                        },
                        {
                          leftValue: "$ZL_DESIGN_STYLE",
                          comparaison: "I",
                          rightValue: "$data.collections",
                        },
                      ],
                    },
                  ],
                },
              ],
              variables: [
                {
                  name: "MAT_FR_1",
                  path: "$data.material",
                  type: "mat",
                },
                {
                  name: "MAT_FR_1_THK",
                  path: "$data.mat_fr_thk",
                },
                {
                  name: "SRF_FR_1_TOP",
                  path: "$data.surface_top",
                  type: "surf",
                },
                {
                  name: "SRF_FR_1_BOT",
                  path: "$data.surface_bot",
                  type: "surf",
                },
                {
                  name: "SRF_FR_1_THK",
                  path: "$data.srf_fr_thk",
                },
                {
                  name: "PRF_FR_1",
                  path: "$data.profile",
                },
                {
                  name: "FI_1_THK",
                  path: "$data.filler_thk",
                },
              ],
            },
            {
              type: "COMBO",
              render: "FIELD",
              name: "ZL_FINISH_INT",
              label: "Interior",
              autofill: true,
              props: {
                image: true,
                type: "CIRCLE",
                options: sources["FINISH_INT_ITEMS"],
              },
              filters: [
                {
                  roles: [
                    {
                      operator: "AND",
                      roles: [
                        {
                          leftValue: "$ZL_DESIGN_STYLE",
                          comparaison: "I",
                          rightValue: "$data.collections",
                        },
                      ],
                    },
                  ],
                },
              ],
              variables: [
                {
                  name: "MAT_1",
                  path: "$data.material",
                  type: "mat",
                },
                {
                  name: "MAT_1_THK",
                  path: "$data.mat_thk",
                },
                {
                  name: "MAT_DSI_1",
                  path: "$data.drawer_material",
                  type: "mat",
                },
                {
                  name: "MAT_DBK_1",
                  path: "$data.drawer_material",
                  type: "mat",
                },
                {
                  name: "SRF_1_TOP",
                  path: "$data.surface_top",
                  type: "surf",
                },
                {
                  name: "SRF_1_BOT",
                  path: "$data.surface_bot",
                  type: "surf",
                },
                {
                  name: "SRF_1_THK",
                  path: "$data.srf_thk",
                },
                {
                  name: "PRF_1",
                  path: "$data.profile",
                },
              ],
            },
            {
              type: "COMBO",
              render: "FIELD",
              name: "ZL_PULL_TYPE",
              label: "Pull",
              autofill: true,
              props: {
                image: true,
                type: "BUTTON",
                layout: "HORIZONTAL",
                options: sources["PULL_ITEMS"],
              },
              filters: [
                {
                  roles: [
                    {
                      operator: "AND",
                      roles: [
                        {
                          leftValue: "$ZL_DESIGN_STYLE",
                          comparaison: "=",
                          rightValue: "$data.collection",
                        },
                      ],
                    },
                  ],
                },
              ],
              variables: [
                {
                  name: "Handle_Type",
                  path: "$data.handle_type",
                },
                {
                  name: "HINGE_OPTION",
                  path: "$data.hinge_option",
                },
                {
                  name: "DR_EXT_SLIDE_TYPE_01",
                  path: "$data.drawer_slide_type",
                },
              ],
              dependencies: [
                {
                  action: "SHOW",
                  roles: [
                    {
                      operator: "OR",
                      roles: [
                        {
                          leftValue: "$ZL_HAVE_PULL",
                          comparaison: "=",
                          rightValue: "Yes",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "function",
          label: "Function",
          type: "NONE",
          render: "SECTION",
          children: [
            {
              type: "LOCAL",
              render: "FIELD",
              name: "ZL_MODULE",
              label: "Column",
              defaultValue: "1",
              autofill: true,
              props: {
                size: "sm",
                type: "BUTTON",
                reverse: true,
                name: "COLUMN",
                source: "ZONES",
                layout: "HORIZONTAL",
              },
            },
            {
              type: "LOCAL",
              render: "FIELD",
              name: "ZL_ARTICLE_SELECT",
              label: "Select Article",
              defaultValue: "",
              props: {
                type: "BUTTON",
                image: true,
                name: "ARTICLE",
                layout: "HORIZONTAL",
              },
            },
            // {
            //   type: "ROW",
            //   name: "filters_section",
            //   label: "Filters",
            //   render: "SECTION",
            //   children: [
            //     {
            //       render: "FIELD",
            //       type: "CHECKBOX",
            //       label: "Has hanger",
            //       name: "ZL_HAS_HANGER",
            //       defaultValue: true,
            //     },
            //     {
            //       render: "FIELD",
            //       type: "CHECKBOX",
            //       label: "Has Drawer",
            //       name: "ZL_HAS_DRAWER",
            //       defaultValue: false,
            //       dependencies: [
            //         {
            //           nod: 1,
            //           action: "SHOW",
            //           roles: [
            //             {
            //               operator: "OR",
            //               roles: [
            //                 {
            //                   leftValue: "ZL_ARTICLE_SELECT.data.article_type",
            //                   comparison: "=",
            //                   value: "MD_CL_CR",
            //                 },
            //               ],
            //             },
            //           ],
            //         },
            //       ],
            //     },
            //   ],
            // },
            {
              type: "LOCAL",
              render: "FIELD",
              name: "ZL_DOOR_TYPE",
              label: "door type",
              defaultValue: "1",
              autofill: true,
              props: {
                size: "sm",
                type: "BUTTON",
                name: "SINGDOUB",
                layout: "HORIZONTAL",
                options: sources["SINGLE_DOUBLE"],
              },
              dependencies: [
                {
                  nod: 1,
                  action: "HIDE",
                  roles: [
                    {
                      operator: "OR",
                      roles: [
                        {
                          operator: "AND",
                          roles: [
                            {field: "@ZL_MODULE.data.accumulated_count", comparaison: ">=", value: "@ZL_CNT" },
                          ]
                        }
                      ]
                    }
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "TAB",
      render: "SECTION",
      name: "middle",
      label: "Middle",
      goToZone: "0.2.1.1",
      defaultVars: {
        WACA_WIDTH: "$ZM_STEP",
      },
      children: [
        {
          type: "NONE",
          render: "SECTION",
          name: "form",
          label: "Form",
          children: [
            {
              type: "INPUT",
              render: "FIELD",
              name: "ZM_WIDTH",
              label: "Width",
              defaultValue: 3200,
              props: {
                min: 400,
                max: 6000,
                type: "SLIDER",
              },
              variables: [
                {
                  name: "ZM_W",
                  path: ".",
                },
              ],
            },
            {
              type: "INPUT",
              render: "FIELD",
              name: "ZM_DEPTH",
              label: "Depth",
              defaultValue: 500,
              props: {
                min: 350,
                max: 800,
                type: "SLIDER",
              },
              variables: [
                {
                  name: "ZM_D",
                  path: ".",
                },
              ],
            },
            {
              type: "INPUT",
              render: "FIELD",
              name: "ZM_CNT",
              label: "Number of articles",
              autofill: true,
              defaultValue: 8,
              props: {
                min: "round($ZM_WIDTH/500)",
                max: "round($ZM_WIDTH/400)",
                type: "SLIDER",
              },
              variables: [
                {
                  name: "ZM_CNT",
                  path: ".",
                },
              ],
            },
            {
              type: "COMBO",
              render: "FIELD",
              name: "ZM_DRAWER_TYPE",
              label: "Drawer type",
              defaultValue: "INTERIOR",
              props: {
                type: "SWITCH",
                options: sources["DRAWER_TYPE_ITEMS"],
              },
            },
          ],
        },
        {
          type: "NONE",
          render: "SECTION",
          name: "styler",
          label: "Styler",
          children: [
            {
              type: "COMBO",
              render: "FIELD",
              name: "ZM_DESIGN_STYLE",
              label: "Design collection",
              autofill: true,
              props: {
                type: "BUTTON",
                image: true,
                layout: "HORIZONTAL",
                options: sources["DESIGN_STYLE_ITEMS"],
              },
            },
            {
              type: "COMBO",
              render: "FIELD",
              name: "ZM_FRONT_TYPE",
              label: "Front",
              props: {
                type: "BUTTON",
                image: true,
                layout: "HORIZONTAL",
                options: sources["FRONT_TYPE_ITEMS"],
              },
              filters: [
                {
                  roles: [
                    {
                      operator: "AND",
                      roles: [
                        {
                          leftValue: "$ZM_DESIGN_STYLE",
                          comparaison: "I",
                          rightValue: "$data.collections",
                        },
                      ],
                    },
                  ],
                },
              ],
              variables: [
                {
                  name: "Door_Name",
                  path: "$data.door_type",
                },
              ],
              formValues: [
                {
                  name: "ZM_HAVE_PULL",
                  path: "$data.have_pull",
                },
              ],
            },
            {
              type: "COMBO",
              render: "FIELD",
              name: "ZM_FINISH_EXT",
              label: "Exterior",
              autofill: true,
              props: {
                image: true,
                type: "CIRCLE",
                options: sources["FINISH_EXT_ITEMS"],
              },
              filters: [
                {
                  roles: [
                    {
                      operator: "AND",
                      roles: [
                        {
                          leftValue: "$ZM_FRONT_TYPE",
                          comparaison: "I",
                          rightValue: "$data.front",
                        },
                        {
                          leftValue: "$ZM_DESIGN_STYLE",
                          comparaison: "I",
                          rightValue: "$data.collections",
                        },
                      ],
                    },
                  ],
                },
              ],
              variables: [
                {
                  name: "MAT_FR_1",
                  path: "$data.material",
                  type: "mat",
                },
                {
                  name: "MAT_FR_1_THK",
                  path: "$data.mat_fr_thk",
                },
                {
                  name: "SRF_FR_1_TOP",
                  path: "$data.surface_top",
                  type: "surf",
                },
                {
                  name: "SRF_FR_1_BOT",
                  path: "$data.surface_bot",
                  type: "surf",
                },
                {
                  name: "SRF_FR_1_THK",
                  path: "$data.srf_fr_thk",
                },
                {
                  name: "PRF_FR_1",
                  path: "$data.profile",
                },
                {
                  name: "FI_1_THK",
                  path: "$data.filler_thk",
                },
              ],
            },
            {
              type: "COMBO",
              render: "FIELD",
              name: "ZM_FINISH_INT",
              label: "Interior",
              autofill: true,
              props: {
                image: true,
                type: "CIRCLE",
                options: sources["FINISH_INT_ITEMS"],
              },
              filters: [
                {
                  roles: [
                    {
                      operator: "AND",
                      roles: [
                        {
                          leftValue: "$ZM_DESIGN_STYLE",
                          comparaison: "I",
                          rightValue: "$data.collections",
                        },
                      ],
                    },
                  ],
                },
              ],
              variables: [
                {
                  name: "MAT_1",
                  path: "$data.material",
                  type: "mat",
                },
                {
                  name: "MAT_1_THK",
                  path: "$data.mat_thk",
                },
                {
                  name: "MAT_DSI_1",
                  path: "$data.drawer_material",
                  type: "mat",
                },
                {
                  name: "MAT_DBK_1",
                  path: "$data.drawer_material",
                  type: "mat",
                },
                {
                  name: "SRF_1_TOP",
                  path: "$data.surface_top",
                  type: "surf",
                },
                {
                  name: "SRF_1_BOT",
                  path: "$data.surface_bot",
                  type: "surf",
                },
                {
                  name: "SRF_1_THK",
                  path: "$data.srf_thk",
                },
                {
                  name: "PRF_1",
                  path: "$data.profile",
                },
              ],
            },
            {
              type: "COMBO",
              render: "FIELD",
              name: "ZM_PULL_TYPE",
              label: "Pull",
              autofill: true,
              props: {
                image: true,
                type: "BUTTON",
                layout: "HORIZONTAL",
                options: sources["PULL_ITEMS"],
              },
              filters: [
                {
                  roles: [
                    {
                      operator: "AND",
                      roles: [
                        {
                          leftValue: "$ZM_DESIGN_STYLE",
                          comparaison: "=",
                          rightValue: "$data.collection",
                        },
                      ],
                    },
                  ],
                },
              ],
              variables: [
                {
                  name: "Handle_Type",
                  path: "$data.handle_type",
                },
                {
                  name: "HINGE_OPTION",
                  path: "$data.hinge_option",
                },
                {
                  name: "DR_EXT_SLIDE_TYPE_01",
                  path: "$data.drawer_slide_type",
                },
              ],
              dependencies: [
                {
                  action: "SHOW",
                  roles: [
                    {
                      operator: "OR",
                      roles: [
                        {
                          leftValue: "$ZM_HAVE_PULL",
                          comparaison: "=",
                          rightValue: "Yes",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "function",
          label: "Function",
          type: "NONE",
          render: "SECTION",
          children: [
            {
              type: "LOCAL",
              render: "FIELD",
              name: "ZM_MODULE",
              label: "Column",
              defaultValue: "1",
              autofill: true,
              props: {
                size: "sm",
                type: "BUTTON",
                name: "COLUMN",
                source: "ZONES",
                layout: "HORIZONTAL",
              },
            },
            {
              type: "LOCAL",
              render: "FIELD",
              name: "ZM_ARTICLE_SELECT",
              label: "Select Article",
              defaultValue: "",
              props: {
                type: "BUTTON",
                image: true,
                name: "ARTICLE",
                layout: "HORIZONTAL",
              },
            },
            // {
            //   id: 1134,
            //   type: "ROW",
            //   name: "filters_section",
            //   label: "Filters",
            //   render: "SECTION",
            //   children: [
            //     {
            //       id: 11341,
            //       render: "FIELD",
            //       type: "CHECKBOX",
            //       label: "Has hanger",
            //       name: "ZM_HAS_HANGER",
            //       defaultValue: true,
            //     },
            //     {
            //       id: 11342,
            //       render: "FIELD",
            //       type: "CHECKBOX",
            //       label: "Has Drawer",
            //       name: "ZM_HAS_DRAWER",
            //       defaultValue: false,
            //       dependencies: [
            //         {
            //           nod: 1,
            //           action: "SHOW",
            //           roles: [
            //             {
            //               operator: "OR",
            //               roles: [
            //                 {
            //                   field: "ZM_ARTICLE_SELECT.data.article_type",
            //                   comparison: "=",
            //                   value: "MD_CL_CR",
            //                 },
            //               ],
            //             },
            //           ],
            //         },
            //       ],
            //     },
            //   ],
            // },
            {
              type: "LOCAL",
              render: "FIELD",
              name: "ZM_DOOR_TYPE",
              label: "door type",
              defaultValue: "1",
              autofill: true,
              props: {
                size: "sm",
                type: "BUTTON",
                name: "SINGDOUB",
                layout: "HORIZONTAL",
                options: sources["SINGLE_DOUBLE"],
              },
            },
            {
              type: "LOCAL",
              render: "FIELD",
              name: "ZM_HINGE_SIDE",
              label: "Opening side",
              directImpact: true,
              defaultValue: "LEFT",
              props: {
                size: "sm",
                type: "BUTTON",
                name: "HINGSIDE",
                layout: "HORIZONTAL",
                options: sources["HINGE_SIDE"],
              },
              variables: [
                {
                  name: "Hinge_Side_nbr",
                  path: "$data.hinge_side_nbr",
                },
              ],
              dependencies: [
                {
                  action: "SHOW",
                  roles: [
                    {
                      operator: "AND",
                      roles: [
                        {
                          leftValue: "$ZM_DOOR_TYPE",
                          comparison: "=",
                          rightValue: "1",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "TAB",
      render: "SECTION",
      name: "right",
      label: "Right",
      goToZone: "0.0.1.1.1",
      defaultVars: {
        WACA_WIDTH: "$ZR_STEP",
      },
      children: [
        {
          type: "NONE",
          render: "SECTION",
          name: "form",
          label: "Form",
          children: [
            {
              type: "INPUT",
              render: "FIELD",
              name: "ZR_WIDTH",
              label: "Width",
              defaultValue: 3200,
              props: {
                min: 400,
                max: 6000,
                type: "SLIDER",
              },
              variables: [
                {
                  name: "ZR_W",
                  path: ".",
                },
              ],
            },
            {
              type: "INPUT",
              render: "FIELD",
              name: "ZR_DEPTH",
              label: "Depth",
              defaultValue: 500,
              props: {
                min: 350,
                max: 800,
                type: "SLIDER",
              },
              variables: [
                {
                  name: "ZR_D",
                  path: ".",
                },
              ],
            },
            {
              type: "INPUT",
              render: "FIELD",
              name: "ZR_CNT",
              label: "Number of articles",
              autofill: true,
              defaultValue: 8,
              props: {
                min: "round($ZR_WIDTH/500)",
                max: "round($ZR_WIDTH/400)",
                type: "SLIDER",
              },
              variables: [
                {
                  name: "ZR_CNT",
                  path: ".",
                },
              ],
            },
            {
              type: "COMBO",
              render: "FIELD",
              name: "ZR_DRAWER_TYPE",
              label: "Drawer type",
              defaultValue: "INTERIOR",
              props: {
                type: "SWITCH",
                options: sources["DRAWER_TYPE_ITEMS"],
              },
            },
          ],
        },
        {
          type: "NONE",
          render: "SECTION",
          name: "styler",
          label: "Styler",
          children: [
            {
              type: "COMBO",
              render: "FIELD",
              name: "ZR_DESIGN_STYLE",
              label: "Design collection",
              autofill: true,
              props: {
                type: "BUTTON",
                image: true,
                layout: "HORIZONTAL",
                options: sources["DESIGN_STYLE_ITEMS"],
              },
            },
            {
              type: "COMBO",
              render: "FIELD",
              name: "ZR_FRONT_TYPE",
              label: "Front",
              autofill: true,
              props: {
                type: "BUTTON",
                image: true,
                layout: "HORIZONTAL",
                options: sources["FRONT_TYPE_ITEMS"],
              },
              filters: [
                {
                  roles: [
                    {
                      operator: "AND",
                      roles: [
                        {
                          leftValue: "$ZR_DESIGN_STYLE",
                          comparaison: "I",
                          rightValue: "$data.collections",
                        },
                      ],
                    },
                  ],
                },
              ],
              variables: [
                {
                  name: "Door_Name",
                  path: "$data.door_type",
                },
              ],
              formValues: [
                {
                  name: "ZR_HAVE_PULL",
                  path: "$data.have_pull",
                },
              ],
            },
            {
              type: "COMBO",
              render: "FIELD",
              name: "ZR_FINISH_EXT",
              label: "Exterior",
              autofill: true,
              props: {
                image: true,
                type: "CIRCLE",
                options: sources["FINISH_EXT_ITEMS"],
              },
              filters: [
                {
                  roles: [
                    {
                      operator: "AND",
                      roles: [
                        {
                          leftValue: "$ZR_FRONT_TYPE",
                          comparaison: "I",
                          rightValue: "$data.front",
                        },
                        {
                          leftValue: "$ZR_DESIGN_STYLE",
                          comparaison: "I",
                          rightValue: "$data.collections",
                        },
                      ],
                    },
                  ],
                },
              ],
              variables: [
                {
                  name: "MAT_FR_1",
                  path: "$data.material",
                  type: "mat",
                },
                {
                  name: "MAT_FR_1_THK",
                  path: "$data.mat_fr_thk",
                },
                {
                  name: "SRF_FR_1_TOP",
                  path: "$data.surface_top",
                  type: "surf",
                },
                {
                  name: "SRF_FR_1_BOT",
                  path: "$data.surface_bot",
                  type: "surf",
                },
                {
                  name: "SRF_FR_1_THK",
                  path: "$data.srf_fr_thk",
                },
                {
                  name: "PRF_FR_1",
                  path: "$data.profile",
                },
                {
                  name: "FI_1_THK",
                  path: "$data.filler_thk",
                },
              ],
            },
            {
              type: "COMBO",
              render: "FIELD",
              name: "ZR_FINISH_INT",
              label: "Interior",
              autofill: true,
              props: {
                image: true,
                type: "CIRCLE",
                options: sources["FINISH_INT_ITEMS"],
              },
              filters: [
                {
                  roles: [
                    {
                      operator: "AND",
                      roles: [
                        {
                          leftValue: "$ZR_DESIGN_STYLE",
                          comparaison: "I",
                          rightValue: "$data.collections",
                        },
                      ],
                    },
                  ],
                },
              ],
              variables: [
                {
                  name: "MAT_1",
                  path: "$data.material",
                  type: "mat",
                },
                {
                  name: "MAT_1_THK",
                  path: "$data.mat_thk",
                },
                {
                  name: "MAT_DSI_1",
                  path: "$data.drawer_material",
                  type: "mat",
                },
                {
                  name: "MAT_DBK_1",
                  path: "$data.drawer_material",
                  type: "mat",
                },
                {
                  name: "SRF_1_TOP",
                  path: "$data.surface_top",
                  type: "surf",
                },
                {
                  name: "SRF_1_BOT",
                  path: "$data.surface_bot",
                  type: "surf",
                },
                {
                  name: "SRF_1_THK",
                  path: "$data.srf_thk",
                },
                {
                  name: "PRF_1",
                  path: "$data.profile",
                },
              ],
            },
            {
              type: "COMBO",
              render: "FIELD",
              name: "ZR_PULL_TYPE",
              label: "Pull",
              autofill: true,
              props: {
                image: true,
                type: "BUTTON",
                layout: "HORIZONTAL",
                options: sources["PULL_ITEMS"],
              },
              filters: [
                {
                  roles: [
                    {
                      operator: "OR",
                      roles: [
                        {
                          leftValue: "$ZR_DESIGN_STYLE",
                          comparaison: "=",
                          rightValue: "$data.collection",
                        },
                      ],
                    },
                  ],
                },
              ],
              variables: [
                {
                  name: "Handle_Type",
                  path: "$data.handle_type",
                  type: "none",
                },
                {
                  name: "HINGE_OPTION",
                  path: "$data.hinge_option",
                  type: "none",
                },
                {
                  name: "DR_EXT_SLIDE_TYPE_01",
                  path: "$data.drawer_slide_type",
                  type: "none",
                },
              ],
              dependencies: [
                {
                  action: "SHOW",
                  roles: [
                    {
                      operator: "OR",
                      roles: [
                        {
                          leftValue: "$ZR_HAVE_PULL",
                          comparaison: "=",
                          rightValue: "Yes",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "function",
          label: "Function",
          type: "NONE",
          render: "SECTION",
          children: [
            {
              type: "LOCAL",
              render: "FIELD",
              name: "ZR_MODULE",
              label: "Column",
              defaultValue: "1",
              autofill: true,
              props: {
                size: "sm",
                reverse: true,
                type: "BUTTON",
                name: "COLUMN",
                source: "ZONES",
                layout: "HORIZONTAL",
              },
            },
            {
              type: "LOCAL",
              render: "FIELD",
              name: "ZR_ARTICLE_SELECT",
              label: "Select Article",
              defaultValue: "",
              props: {
                type: "BUTTON",
                image: true,
                name: "ARTICLE",
                layout: "HORIZONTAL",
              },
            },
            // {
            //   id: 1134,
            //   type: "ROW",
            //   name: "filters_section",
            //   label: "Filters",
            //   render: "SECTION",
            //   children: [
            //     {
            //       id: 11341,
            //       render: "FIELD",
            //       type: "CHECKBOX",
            //       label: "Has hanger",
            //       name: "ZR_HAS_HANGER",
            //       defaultValue: true,
            //     },
            //     {
            //       id: 11342,
            //       render: "FIELD",
            //       type: "CHECKBOX",
            //       label: "Has Drawer",
            //       name: "ZR_HAS_DRAWER",
            //       defaultValue: false,
            //       dependencies: [
            //         {
            //           nod: 1,
            //           action: "SHOW",
            //           roles: [
            //             {
            //               operator: "OR",
            //               roles: [
            //                 {
            //                   field: "ZR_ARTICLE_SELECT.data.article_type",
            //                   comparison: "=",
            //                   value: "MD_CL_CR",
            //                 },
            //               ],
            //             },
            //           ],
            //         },
            //       ],
            //     },
            //   ],
            // },
            {
              type: "LOCAL",
              render: "FIELD",
              name: "ZR_DOOR_TYPE",
              label: "door type",
              defaultValue: "1",
              autofill: true,
              props: {
                size: "sm",
                type: "BUTTON",
                name: "SINGDOUB",
                layout: "HORIZONTAL",
                options: sources["SINGLE_DOUBLE"],
              },
              dependencies: [
                {
                  nod: 1,
                  action: "HIDE",
                  roles: [
                    {
                      operator: "OR",
                      roles: [
                        {
                          operator: "AND",
                          roles: [
                            {field: "$IS_RL_N", comparaison: "=", value: "1"},
                            {field: "@ZR_MODULE", comparaison: "=", value: "1"}
                          ]
                        },
                        {
                          operator: "AND",
                          roles: [
                            {field: "@ZR_MODULE.data.accumulated_count", comparaison: ">=", value: "@ZR_CNT" },
                          ]
                        }
                      ]
                    }
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const initFormValues = {
  height: 2000,
  leftWidth: 5200,
  leftDepth: 500,
};

export { form, initFormValues };
export default zoning;