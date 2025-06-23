module.exports = {
    base: '/EasyCode-Plus/',
    title: "EasyCode Plus",
    ignoreDeadLinks: true,
    description: "A powerful code generation tool based on templates",
    markdown: {
        // 禁用 Vue 语法解析，避免与 Velocity 语法冲突
        vue: {
            template: false
        }
    },
    locales: {
        root: {
            label: 'English',
            lang: 'en',
            link: '/',
            themeConfig: {
                nav: [
                    { text: 'Guide', link: '/guide/' },
                    { text: 'API', link: '/api/' }
                ],
                sidebar: {
                    '/guide/': [
                        { text: 'Getting Started', link: '/guide/getting-started' },
                        { text: 'Templates', link: '/guide/templates' },
                        { text: 'Groovy Script', link: '/guide/groovy-script' },
                        { text: 'Paid Features', link: '/guide/pro-features' },
                        { text: 'Contact', link: '/guide/contact-us' }
                    ],
                    '/api/': [
                        { text: 'TableInfo', link: '/api/table-info' },
                        { text: 'ColumnInfo', link: '/api/column-info' },
                        { text: 'Global Variables', link: '/api/global-variables' },
                        { text: 'Template Examples', link: '/api/template-examples' }
                    ]
                }
            }
        },
        zh: {
            label: '简体中文',
            lang: 'zh-CN',
            link: '/zh/',
            themeConfig: {
                nav: [
                    { text: '指南', link: '/zh/guide/' },
                    { text: 'API', link: '/zh/api/' }
                ],
                sidebar: {
                    '/zh/guide/': [
                        { text: '快速开始', link: '/zh/guide/getting-started' },
                        { text: '模板开发', link: '/zh/guide/templates' },
                        { text: 'Groovy 脚本', link: '/zh/guide/groovy-script' },
                        { text: '付费功能', link: '/zh/guide/pro-features' },
                        { text: '联系我们', link: '/zh/guide/contact' }
                    ],
                    '/zh/api/': [
                        { text: 'TableInfo', link: '/zh/api/table-info' },
                        { text: 'ColumnInfo', link: '/zh/api/column-info' },
                        { text: '全局变量', link: '/zh/api/global-variables' },
                        { text: '模板示例', link: '/zh/api/template-examples' }
                    ]
                }
            }
        }
    }
}
