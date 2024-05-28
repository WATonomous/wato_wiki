import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { Bot, Heart, Code2 } from "lucide-react"

const config: DocsThemeConfig = {
  logo: <span>WATonomous Wiki</span>,
  project: {
    link: 'https://github.com/WATonomous/wato_wiki',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/WATonomous/wato_wiki',
  footer: {
    text: (
      // Maybe create a footer component instead?
      // eg: map over FooterData.links, FooterData.icons
      <div className="w-full mx-auto max-w-screen-xl lg:flex lg:gap-x-20 lg:items-center lg:justify-between text-center lg:text-left">
        <span>
          Made with <Heart className="inline-block align-text-bottom"/> using <Code2 className="inline-block align-text-bottom"/> and <Bot className="inline-block align-text-bottom"/><br className="md:hidden"/> by WATonomous and WATcloud.
        </span>
      </div>
    )
  },
}

export default config
