const form = {
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
          type: "NONE",
          render: "SECTION",
          name: "styler",
          label: "Styler",
          children: [
            {
              type: "COMBO",
              render: "FIELD",
              name: "DESIGN_STYLE",
              label: "Design collection",
              autofill: true,
              props: {
                type: "BUTTON",
                image: true,
                layout: "HORIZONTAL",
                options: ["DESIGN_STYLE_ITEMS"],
              },
            },
            {
              type: "COMBO",
              render: "FIELD",
              name: "FRONT_TYPE",
              label: "Front",
              props: {
                type: "BUTTON",
                image: true,
                layout: "HORIZONTAL",
                options: ["FRONT_TYPE_ITEMS"],
              },
              filters: [
                {
                  roles: [
                    {
                      operator: "AND",
                      roles: [
                        {
                          leftValue: "$DESIGN_STYLE",
                          comparaison: "I",
                          rightValue: "$Attributes.collection",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "COMBO",
              render: "FIELD",
              name: "FINISH_EXT",
              label: "Exterior",
              autofill: true,
              props: {
                image: true,
                type: "CIRCLE",
                options: ["FINISH_EXT_ITEMS"],
              },
              filters: [
                {
                  roles: [
                    {
                      operator: "AND",
                      roles: [
                        {
                          leftValue: "CONCAT($DESIGN_STYLE.value,$FRONT_TYPE.value)",
                          comparaison: "I",
                          rightValue: "$Attributes.filter",
                        }
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "COMBO",
              render: "FIELD",
              name: "FINISH_INT",
              label: "Interior",
              autofill: true,
              props: {
                image: true,
                type: "CIRCLE",
                options: ["FINISH_INT_ITEMS"],
              },
              filters: [
                {
                  roles: [
                    {
                      operator: "AND",
                      roles: [
                        {
                          leftValue: "CONCAT($DESIGN_STYLE.value,$FRONT_TYPE.value,$FINISH_EXT.value)",
                          comparaison: "I",
                          rightValue: "$Attributes.filter",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "COMBO",
              render: "FIELD",
              name: "ZF_PULL_TYPE",
              label: "Pull",
              autofill: true,
              props: {
                image: true,
                type: "BUTTON",
                layout: "HORIZONTAL",
                options: ["PULL_ITEMS"],
              },
              filters: [
                {
                  roles: [
                    {
                      operator: "AND",
                      roles: [
                        {
                          leftValue: "$FRONT_TYPE",
                          comparaison: "I",
                          rightValue: "$Attributes.front",
                        },
                        {
                          leftValue: "$ZF_DESIGN_STYLE",
                          comparaison: "I",
                          rightValue: "$data.collection",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        }
  ],
};
