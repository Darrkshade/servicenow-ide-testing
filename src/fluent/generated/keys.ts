import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: '43a2850127d343839f1bd39aeffe4a51'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '88e75440d8be4b46be7719b40124af6c'
                    }
                }
            }
        }
    }
}
