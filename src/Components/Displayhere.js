import React, { Component } from 'react'
import Cards from './Cards'

export default class Displayhere extends Component {

    articles=
    [ 
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "GBTC Bitcoin ETF holdings drop before halving",
        "description": "The Grayscale Bitcoin Trust (GBTC), a prominent Bitcoin investment product, has seen a significant decline in its Bitcoin (BTC) holdings.… Continue reading GBTC Bitcoin ETF holdings drop before halving\nThe post GBTC Bitcoin ETF holdings drop before halving ap…",
        "url": "https://readwrite.com/gbtc-bitcoin-etf-holdings-drop-before-halving/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/04/zxDgyfq8QYCzJhRAH2CF1g.jpg",
        "publishedAt": "2024-04-17T16:43:29Z",
        "content": "The Grayscale Bitcoin Trust (GBTC), a prominent Bitcoin investment product, has seen a significant decline in its Bitcoin (BTC) holdings. This is despite the outflows recently slowing down.\r\nAccordin… [+2125 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Slashdot.org"
        },
        "author": "EditorDavid",
        "title": "Jack Dorsey's Block Is Investing 10% Of Its Bitcoin Profits Into Monthly Bitcoin Purchases",
        "description": "An anonymous reader shared this report from the blog Bitcoinist:\n\nJack Dorsey's financial services and digital payments company, Block Inc., announced it will begin investing 10% of its monthly Bitcoin-related gross profits into BTC purchases. This announceme…",
        "url": "https://slashdot.org/story/24/05/04/0356205/jack-dorseys-block-is-investing-10-of-its-bitcoin-profits-into-monthly-bitcoin-purchases",
        "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
        "publishedAt": "2024-05-04T17:34:00Z",
        "content": "Jack Dorsey's financial services and digital payments company, Block Inc., announced it will begin investing 10% of its monthly Bitcoin-related gross profits into BTC purchases. This announcement was… [+1022 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Bitcoin beaches one billion transactions milestone",
        "description": "Bitcoin (BTC) — the world’s first and most valuable cryptocurrency — has surpassed one billion processed transactions. This milestone was… Continue reading Bitcoin beaches one billion transactions milestone\nThe post Bitcoin beaches one billion transactions mi…",
        "url": "https://readwrite.com/bitcoin-beaches-one-billion-transactions-milestone/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/ada10bac-b90f-4618-8f7c-490d8dc6692a.webp",
        "publishedAt": "2024-05-06T12:22:39Z",
        "content": "Bitcoin (BTC) the world’s first and most valuable cryptocurrency has surpassed one billion processed transactions. This milestone was reached 800 weeks and one day after the launch of Bitcoin on Janu… [+2107 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "El Salvador’s Bitcoin holdings reach $373M",
        "description": "According to a report by the country’s “Bitcoin Office,” a government entity overseeing all Bitcoin-related projects, El Salvador could hold… Continue reading El Salvador’s Bitcoin holdings reach $373M\nThe post El Salvador’s Bitcoin holdings reach $373M appea…",
        "url": "https://readwrite.com/el-salvadors-bitcoin-holdings-reach-373m/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/25b91b12-cd57-4b3e-b4e5-4be84fbf56bd.webp",
        "publishedAt": "2024-05-15T17:38:10Z",
        "content": "According to a report by the country’s “Bitcoin Office,” a government entity overseeing all Bitcoin-related projects, El Salvador could hold up to 5,750 BTC.\r\nSince 2021, the nation has mined nearly … [+2540 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "BlackRock’s Bitcoin ETF sees first day without inflows",
        "description": "BlackRock’s iShares Bitcoin Trust (IBIT) has experienced its first day without any inflows since the introduction of Bitcoin (BTC) exchange-traded… Continue reading BlackRock’s Bitcoin ETF sees first day without inflows\nThe post BlackRock’s Bitcoin ETF sees f…",
        "url": "https://readwrite.com/blackrocks-bitcoin-etf-sees-first-day-without-inflows/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/04/eaa08a84-02bf-4e04-af55-67efc1e88950.webp",
        "publishedAt": "2024-04-25T11:28:14Z",
        "content": "BlackRock’s iShares Bitcoin Trust (IBIT) has experienced its first day without any inflows since the introduction of Bitcoin (BTC) exchange-traded funds (ETFs) in the United States in January, Farsid… [+1836 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "fdemott@insider.com (Filip De Mott)",
        "title": "Bitcoin could see a wave of forced selling as miners face the reality of lower rewards post-halving, research firm says",
        "description": "\"If miners were forced to sell even a fraction of their holdings over the coming month this would have a negative impact on markets,\" Kaiki Research wrote.",
        "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-supply-crypto-currency-miners-btc-sell-off-decline-2024-5",
        "urlToImage": "https://i.insider.com/6643af41b4abc992e8c96de5?width=1200&format=jpeg",
        "publishedAt": "2024-05-15T12:17:10Z",
        "content": "Markets have long considered bitcoin's recent halving as a major price bolster, but it could bring a wave of selling from one corner of the sector, according to Kaiko Research.\r\nThe April halving is … [+1708 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "yzhan@insider.com (Yuheng Zhan)",
        "title": "Bitcoin's bull run may be over and the next move could see it drop nearly 50%, says a market vet who predicted the token's 2018 crash",
        "description": "\"It has happened. It is real. You may not want to believe it, but I place a 25% chance that Bitcoin has already topped for this cycle,\" Brandt said.",
        "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-prediction-crash-bull-rally-over-crypto-peter-brandt-2024-4",
        "urlToImage": "https://i.insider.com/6630f4160dfb1341e9009d67?width=1200&format=jpeg",
        "publishedAt": "2024-04-30T14:47:48Z",
        "content": "Bitcoin may have peaked at its high around $73,000 in March, and what awaits investors could be a 50% fall in the token's value. \r\nThat's according to Peter Brandt, a veteran chart analyst and the fo… [+2077 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Bitcoin whales drive price above $67,000 resistance",
        "description": "New research suggests that Bitcoin whales have been accumulating the cryptocurrency, keeping the price above a crucial resistance level until… Continue reading Bitcoin whales drive price above $67,000 resistance\nThe post Bitcoin whales drive price above $67,0…",
        "url": "https://readwrite.com/bitcoin-whales-drive-price-above-67000-resistance/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/04/79155949-f7ed-40ad-9e7a-c28f0a2f771e.webp",
        "publishedAt": "2024-04-24T14:56:54Z",
        "content": "New research suggests that Bitcoin whales have been accumulating the cryptocurrency, keeping the price above a crucial resistance level until April 24, 2024.\r\nAccording to data from TradingView, Bitc… [+2172 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Sam Shedden",
        "title": "US Bitcoin ETFs see record outflows after Fed announcement",
        "description": "US spot Bitcoin exchange-traded funds (ETFs) endured their biggest single-day outflow yesterday (May 1). Investors took over half a billion… Continue reading US Bitcoin ETFs see record outflows after Fed announcement\nThe post US Bitcoin ETFs see record outflo…",
        "url": "https://readwrite.com/us-bitcoin-etfs-see-record-outflows-after-fed-announcement/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/1_bjzQshRa2U1xuTa7rNuw.jpg",
        "publishedAt": "2024-05-02T09:15:43Z",
        "content": "US spot Bitcoin exchange-traded funds (ETFs) endured their biggest single-day outflow yesterday (May 1).\r\nInvestors took over half a billion dollars ($563.7m) out of the 11 publicly traded American B… [+1827 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Twitter’s Jack Dorsey predicts Bitcoin could hit $1 million in six years",
        "description": "Jack Dorsey, a prominent tech leader, is making a bold prediction about the future of Bitcoin (BTC), stating that its… Continue reading Twitter’s Jack Dorsey predicts Bitcoin could hit $1 million in six years\nThe post Twitter’s Jack Dorsey predicts Bitcoin co…",
        "url": "https://readwrite.com/bitcoin-value-jack-dorsey-1-million/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/98661240-f9cf-415a-83bb-3f45fa5f4110.webp",
        "publishedAt": "2024-05-10T19:25:05Z",
        "content": "Jack Dorsey, a prominent tech leader, is making a bold prediction about the future of Bitcoin (BTC), stating that its price could skyrocket to over $1 million by 2030.\r\nIn an interview with Pirates W… [+1962 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Bitcoin transaction fees plummet after halving event",
        "description": "Bitcoin (BTC) started the week on a stable note, trading above $65,800, as transaction fees have significantly decreased following the… Continue reading Bitcoin transaction fees plummet after halving event\nThe post Bitcoin transaction fees plummet after halvi…",
        "url": "https://readwrite.com/bitcoin-transaction-fees-plummet-after-halving-event/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/04/18a8acb3-35fb-49c7-86b1-049e5aee8ee9.webp",
        "publishedAt": "2024-04-22T17:51:17Z",
        "content": "Bitcoin (BTC) started the week on a stable note, trading above $65,800, as transaction fees have significantly decreased following the recent halving event.\r\nThis reduction in fees is a stark contras… [+1975 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Sam Shedden",
        "title": "Hong Kong launches Asia’s first sport Bitcoin and Ethereum ETFs",
        "description": "Hong Kong launched six spot bitcoin and ether exchange-traded funds (ETFs) on Tuesday (Apr 30) in a historic move for… Continue reading Hong Kong launches Asia’s first sport Bitcoin and Ethereum ETFs\nThe post Hong Kong launches Asia’s first sport Bitcoin and …",
        "url": "https://readwrite.com/hong-kong-launches-asias-first-sport-bitcoin-and-ethereum-etfs/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/04/WqK7wQ05R4OvG6LtG7WP0A.jpg",
        "publishedAt": "2024-04-30T10:05:30Z",
        "content": "Hong Kong launched six spot bitcoin and ether exchange-traded funds (ETFs) on Tuesday (Apr 30) in a historic move for the Asian cryptocurrency market.\r\nThe ETFs, issued by China Asset Management (Chi… [+1855 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Sophie Atkinson",
        "title": "Approved spot Bitcoin ETFs could be coming to Australia’s largest stock exchange",
        "description": "Approved spot Bitcoin exchange-traded funds could soon be visible on the Australian ASX stock exchange, according to reports. ASX Ltd… Continue reading Approved spot Bitcoin ETFs could be coming to Australia’s largest stock exchange\nThe post Approved spot Bit…",
        "url": "https://readwrite.com/approved-spot-bitcoin-etfs-could-be-coming-to-australias-largest-stock-exchange/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/04/ASX-scaled.jpg",
        "publishedAt": "2024-04-29T16:04:21Z",
        "content": "Approved spot Bitcoin exchange-traded funds could soon be visible on the Australian ASX stock exchange, according to reports.\r\nASX Ltd is responsible for handling around four-fifths of Australias equ… [+1750 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Sam Shedden",
        "title": "Bitcoin price falls to $57,000 as investors brace for Fed decision",
        "description": "Bitcoin has fallen sharply to around $57,300, as investor sentiment shifts ahead of a US Federal Reserve announcement on interest… Continue reading Bitcoin price falls to $57,000 as investors brace for Fed decision\nThe post Bitcoin price falls to $57,000 as i…",
        "url": "https://readwrite.com/bitcoin-price-falls-to-57000-as-investors-brace-for-fed-decision/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/c_jneVajSQSERHYjk5v-ZA.jpg",
        "publishedAt": "2024-05-01T09:56:09Z",
        "content": "Bitcoin has fallen sharply to around $57,300, as investor sentiment shifts ahead of a US Federal Reserve announcement on interest rates expected later on Wednesday (May 1).\r\nThis steep decline marks … [+2328 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Miners stockpile Bitcoin ahead of upcoming halving event",
        "description": "Cryptocurrency miners are stockpiling near-record amounts of Bitcoin, hoping the token will rise in value and offset a drop in… Continue reading Miners stockpile Bitcoin ahead of upcoming halving event\nThe post Miners stockpile Bitcoin ahead of upcoming halvi…",
        "url": "https://readwrite.com/miners-stockpile-bitcoin-ahead-of-upcoming-halving-event/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/04/a5fbfc1f-d015-4bb8-9f54-6fbc89cce8cc.webp",
        "publishedAt": "2024-04-18T16:03:45Z",
        "content": "Cryptocurrency miners are stockpiling near-record amounts of Bitcoin, hoping the token will rise in value and offset a drop in new supply that will cut the rewards for verifying transactions in half,… [+3852 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Bitcoin, altcoins dip on Iran-Israel tensions",
        "description": "The past week brought a downturn for both Bitcoin and altcoins, possibly triggered by the macroeconomic implications of the escalating… Continue reading Bitcoin, altcoins dip on Iran-Israel tensions\nThe post Bitcoin, altcoins dip on Iran-Israel tensions appea…",
        "url": "https://readwrite.com/bitcoin-altcoins-dip-on-iran-israel-tensions/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/04/a921c172-c3d1-4b42-a4b7-75e0277367e3.webp",
        "publishedAt": "2024-04-19T16:10:56Z",
        "content": "The past week brought a downturn for both Bitcoin and altcoins, possibly triggered by the macroeconomic implications of the escalating tensions between Iran and Israel over the weekend.\r\nAs a result,… [+2636 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "James Spillane",
        "title": "Pepe, Shiba Inu Up After Bitcoin Halving – Top Meme Coin Price Predictions",
        "description": "Meme coin prices outperform, source – Crypto Bubbles While BTC pulled back slightly after the historic fourth Bitcoin halving took… Continue reading Pepe, Shiba Inu Up After Bitcoin Halving – Top Meme Coin Price Predictions\nThe post Pepe, Shiba Inu Up After B…",
        "url": "https://readwrite.com/pepe-shiba-inu-up-after-bitcoin-halving-top-meme-coin-price-predictions/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/04/meme-coins-shiba-inu-pepe-bonk-pumping.png",
        "publishedAt": "2024-04-21T12:18:10Z",
        "content": "Meme coin prices outperform, source – Crypto Bubbles\r\nWhile BTC pulled back slightly after the historic fourth Bitcoin halving took place on Friday, the weekend has seen a recovery with the Bitcoin p… [+2136 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Bitcoin wallets holding over $1,000 surge 20% in 2024",
        "description": "According to a report released by Fidelity Digital Assets on Monday, the number of Bitcoin wallets holding $1,000 or more… Continue reading Bitcoin wallets holding over $1,000 surge 20% in 2024\nThe post Bitcoin wallets holding over $1,000 surge 20% in 2024 ap…",
        "url": "https://readwrite.com/bitcoin-wallets-holding-over-1000-surge-20-in-2024/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/04/edecbe45-9e83-4422-98b5-c3786c33a5d1.webp",
        "publishedAt": "2024-04-25T11:15:48Z",
        "content": "According to a report released by Fidelity Digital Assets on Monday, the number of Bitcoin wallets holding $1,000 or more has experienced a significant 20% increase since the beginning of 2024.\r\nThis… [+2556 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "mfox@businessinsider.com (Matthew Fox)",
        "title": "The state of Wisconsin purchased $163 million in bitcoin ETFs in the first quarter",
        "description": "The state of Wisconsin Investment Board purchased bitcoin ETFs from BlackRock and Grayscale in the first quarter, according to a 13F filing.",
        "url": "https://markets.businessinsider.com/news/currencies/wisconsin-buys-bitcoin-163-million-crypto-etf-state-investment-board-2024-5",
        "urlToImage": "https://i.insider.com/6644fd3b14fb5b23cc5cbfca?width=1200&format=jpeg",
        "publishedAt": "2024-05-15T19:47:07Z",
        "content": "The state of Wisconsin purchased $163 million worth of bitcoin in the first quarter, according to a 13F filing made with the Securities and Exchange Commission. \r\nThe Wisconsin Investment Board manag… [+1287 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Bitcoin’s price remains stable despite 2023 halving event",
        "description": "Bitcoin (BTC), the world’s most well-known cryptocurrency, has recently undergone its fourth halving event since its creation. Halvings, which occur… Continue reading Bitcoin’s price remains stable despite 2023 halving event\nThe post Bitcoin’s price remains s…",
        "url": "https://readwrite.com/bitcoins-price-remains-stable-despite-2023-halving-event/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/04/5741799d-bbc6-4257-9c19-842037cf87d4.webp",
        "publishedAt": "2024-04-22T19:02:32Z",
        "content": "Bitcoin (BTC), the world’s most well-known cryptocurrency, has recently undergone its fourth halving event since its creation.\r\nHalvings, which occur roughly every four years, are designed to reduce … [+2300 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Sam Shedden",
        "title": "Jack Dorsey’s Block invests in Bitcoin’s with 10% monthly profit allocation",
        "description": "Twitter founder Jack Dorsey’s payments firm Block has announced plans to plow 10% of profits from its products back into… Continue reading Jack Dorsey’s Block invests in Bitcoin’s with 10% monthly profit allocation\nThe post Jack Dorsey’s Block invests in Bitc…",
        "url": "https://readwrite.com/jack-dorseys-block-invests-in-bitcoins-with-10-monthly-profit-allocation/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/Rp8Tnrm2RfeEfwrYB2HL2A.jpg",
        "publishedAt": "2024-05-03T09:28:09Z",
        "content": "Twitter founder Jack Dorsey’s payments firm Block has announced plans to plow 10% of profits from its products back into Bitcoin each month.\r\nThe initiative, unveiled in Block’s latest quarterly repo… [+2465 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Slashdot.org"
        },
        "author": "EditorDavid",
        "title": "How a Renewable Energy-Powered Bitcoin Startup Helps Electrify Rural Africa",
        "description": "CNBC visited a small group of bitcoin miners who \"set up shop at the site of an extinct volcano\" near Kenya's Hell's Gate National Park. \n\nTheir mine \"consists of a single 500-kilowatt mobile container that, from the outside, looks like a small residential tr…",
        "url": "https://news.slashdot.org/story/24/04/21/0221237/how-a-renewable-energy-powered-bitcoin-startup-helps-electrify-rural-africa",
        "urlToImage": "https://a.fsdn.com/sd/topics/money_64.png",
        "publishedAt": "2024-04-21T15:34:00Z",
        "content": "CNBC visited a small group of bitcoin miners who \"set up shop at the site of an extinct volcano\" near Kenya's Hell's Gate National Park.Their mine \"consists of a single 500-kilowatt mobile container … [+2801 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "‘Bitcoin and stocks may be about to have major correction’, says analyst",
        "description": "The stock and cryptocurrency markets could be approaching a significant price correction, according to Markus Thielen, the founder of 10x… Continue reading ‘Bitcoin and stocks may be about to have major correction’, says analyst\nThe post ‘Bitcoin and stocks m…",
        "url": "https://readwrite.com/bitcoin-price-drop-interest-rate-expectations/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/04/9aa99fcc-0d8f-4cda-98b5-35f60edeb00a.webp",
        "publishedAt": "2024-04-16T16:19:53Z",
        "content": "The stock and cryptocurrency markets could be approaching a significant price correction, according to Markus Thielen, the founder of 10x Research.\r\nIn an April 16 research note, Thielen cited persis… [+1928 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Petar Jovanović",
        "title": "Meme Stocks Outperform Bitcoin Price In May – Are These Under-the-Radar Solana Meme Coins Next?",
        "description": "If someone asked you about the hottest story in crypto this week, the unexpected answer might be meme stocks. Even… Continue reading Meme Stocks Outperform Bitcoin Price In May – Are These Under-the-Radar Solana Meme Coins Next?\nThe post Meme Stocks Outperfor…",
        "url": "https://readwrite.com/meme-stocks-outperform-bitcoin-price-in-may-are-these-under-the-radar-solana-meme-coins-next/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/Bitcoin.jpg",
        "publishedAt": "2024-05-15T07:47:48Z",
        "content": "If someone asked you about the hottest story in crypto this week, the unexpected answer might be meme stocks. Even though they are not part of the crypto world, the meme stocks Gamestop (GME) and AMC… [+5044 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Sam Shedden",
        "title": "Coinbase profits soar over $1 billion from a year amid Bitcoin ETF boom",
        "description": "Coinbase, one of the world’s largest cryptocurrency exchanges, reported a remarkable turnaround in its first-quarter financial results on Thursday (May… Continue reading Coinbase profits soar over $1 billion from a year amid Bitcoin ETF boom\nThe post Coinbase…",
        "url": "https://readwrite.com/coinbase-profits-soar-over-1-billion-from-a-year-amid-bitcoin-etf-boom/",
        "urlToImage": null,
        "publishedAt": "2024-05-03T13:04:31Z",
        "content": "Coinbase, one of the world’s largest cryptocurrency exchanges, reported a remarkable turnaround in its first-quarter financial results on Thursday (May 2).\r\nThe company swung to a staggering $1.2 bil… [+1837 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Samourai Wallet founders arrested, crypto market tumbles",
        "description": "The dramatic arrest of Samourai Wallet Bitcoin founders by the US Department of Justice has sparked shock in the crypto… Continue reading Samourai Wallet founders arrested, crypto market tumbles\nThe post Samourai Wallet founders arrested, crypto market tumble…",
        "url": "https://readwrite.com/samourai-wallet-founders-arrested-crypto-market-tumbles/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/04/43315ab7-69d3-46cd-9d1a-12a0569aeebe.webp",
        "publishedAt": "2024-04-26T13:10:12Z",
        "content": "The dramatic arrest of Samourai Wallet Bitcoin founders by the US Department of Justice has sparked shock in the crypto community.\r\nOn April 24, the cryptocurrency market experienced a brief tumble f… [+2296 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Petar Jovanović",
        "title": "Altcoins Hold Up as Bitcoin Price Flash Crashes with Upcoming CPI This Week – Best Crypto to Buy the Dip",
        "description": "As the highly anticipated Consumer Price Index (CPI) report draws near on May 15, 2024, the potential impact on Bitcoin’s… Continue reading Altcoins Hold Up as Bitcoin Price Flash Crashes with Upcoming CPI This Week – Best Crypto to Buy the Dip\nThe post Altco…",
        "url": "https://readwrite.com/altcoins-hold-up-as-bitcoin-price-flash-crashes-with-upcoming-cpi-this-week-best-crypto-to-buy-the-dip/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/image.jpg",
        "publishedAt": "2024-05-13T13:26:22Z",
        "content": "As the highly anticipated Consumer Price Index (CPI) report draws near on May 15, 2024, the potential impact on Bitcoin’s price and the broader cryptocurrency market looms large. The CPI data serves … [+5340 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Geoff Weiss",
        "title": "College alum surprised that his ayahuasca-inspired speech praising bitcoin got groans and boos",
        "description": "Pan said on LinkedIn he'd gotten \"some help from AI (Ayahuasca Intelligence)\" to write the speech, which featured meditation and singing.",
        "url": "https://www.businessinsider.com/osu-commencement-speaker-ayahuasca-praises-bitcoin-booed-viral-2024-5",
        "urlToImage": "https://i.insider.com/663a92abb4abc992e8c6b56a?width=1200&format=jpeg",
        "publishedAt": "2024-05-08T19:32:55Z",
        "content": "Chris PanCourtesy of OSU\r\n<ul><li>An ayahuasca-inspired commencement speech didn't go too well at Ohio State University.</li><li>Alum and jewelry entrepreneur Chris Pan lauded bitcoin and sang songs.… [+2818 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "BlackRock’s IBIT achieves 70-day inflow streak milestone",
        "description": "BlackRock’s spot Bitcoin exchange-traded fund (ETF), IBIT, has achieved an impressive milestone by registering net inflows for 70 consecutive days.… Continue reading BlackRock’s IBIT achieves 70-day inflow streak milestone\nThe post BlackRock’s IBIT achieves 7…",
        "url": "https://readwrite.com/blackrocks-ibit-achieves-70-day-inflow-streak-milestone/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/04/4c0abbbe-8b32-43db-b01d-d2c9ff3919bc.webp",
        "publishedAt": "2024-04-23T10:58:18Z",
        "content": "BlackRock’s spot Bitcoin exchange-traded fund (ETF), IBIT, has achieved an impressive milestone by registering net inflows for 70 consecutive days.\r\nThis achievement places the fund among the top 10 … [+2105 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "VentureBeat"
        },
        "author": "Jordan Fragen",
        "title": "ZBD Gen Z gamer study: spending habits, creators, bitcoin rewards",
        "description": "In ZBD's survey of Gen Z gamers, 36% said gaming companies run by older generations were out of touch. Creators and bitcoin rewards can help.",
        "url": "https://venturebeat.com/games/zbd-gen-z-gamer-study/",
        "urlToImage": "https://venturebeat.com/wp-content/uploads/2024/05/GenZCaseStudy_Images.jpg?w=1200&strip=all",
        "publishedAt": "2024-05-15T12:00:00Z",
        "content": "Join gaming leaders live this May 20-21 in Los Angeles to examine the strategies needed to adapt and excel in an ever evolving landscape, featuring insights from leading voices and thought leaders in… [+1755 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Petar Jovanović",
        "title": "Bitcoin and Altcoins Prices Pump as CPI Report Shows US Inflation Falls to 3.4% – Best AI Cryptocurrencies to Buy Now",
        "description": "Today’s CPI report has continued an 11-week trend of data arriving above 3%, leaving traders skeptical about the possibility of… Continue reading Bitcoin and Altcoins Prices Pump as CPI Report Shows US Inflation Falls to 3.4% – Best AI Cryptocurrencies to Buy…",
        "url": "https://readwrite.com/bitcoin-and-altcoins-prices-pump-as-cpi-report-shows-us-inflation-falls-to-3-4-best-ai-cryptocurrencies-to-buy-now/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/Coinmarketcap-I-1.png",
        "publishedAt": "2024-05-15T14:57:23Z",
        "content": "Today’s CPI report has continued an 11-week trend of data arriving above 3%, leaving traders skeptical about the possibility of the figure falling below that number anytime soon. However, the report … [+4334 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Investor's Business Daily"
        },
        "author": "Investor's Business Daily",
        "title": "Coinbase Delivers Major Earnings, Revenue Beat Thanks To Soaring Bitcoin Prices, Crypto Interest",
        "description": "Coinbase transaction revenue more-than doubled as crypto prices, participation rally with bitcoin.",
        "url": "https://www.investors.com/news/coinbase-stock-q1-earnings-beat-bitcoin-cryptocurrency/",
        "urlToImage": "https://www.investors.com/wp-content/uploads/2023/12/Stock-coinbase-02-adobe.jpg",
        "publishedAt": "2024-05-02T21:20:43Z",
        "content": "Coinbase posted a major first-quarter beat late Thursday, driven by bitcoin's start-of-the-year boom and renewed interest in cryptocurrencies. Meanwhile, bitcoin rebounded slightly after falling on W… [+3758 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Sarah Andersen,Laila Maidan,Jose Duran",
        "title": "The cryptocurrencies that are worth investing in, from bitcoin to altcoins to meme coins",
        "description": "Investing in crypto can be attractive, but where should you start? Here is a breakdown of digital currencies from Pepe to Ethereum.",
        "url": "https://www.businessinsider.com/crypto-bitcoin-meme-alt-coins-ethereum-investing-finance-cryptocurrencies",
        "urlToImage": "https://i.insider.com/663cf152f27898f532d57eca?width=1200&format=jpeg",
        "publishedAt": "2024-05-09T18:54:54Z",
        "content": "The offers and details on this page may have updated or changed since the time of publication. See our article on Business Insider for current information.\r\nInvesting in crypto can be attractive, but… [+133 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": null,
        "title": "MicroStrategy Unveils Plan for Bitcoin-Based Decentralized Identity Using Ordinals",
        "description": null,
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_dc0b66ed-c184-4839-bebf-5ebf176931ee",
        "urlToImage": null,
        "publishedAt": "2024-05-02T15:21:46Z",
        "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "OKX continues global expansion with Australia launch",
        "description": "OKX, a prominent global digital asset exchange, has officially commenced operations in Australia, marking a significant milestone since establishing its… Continue reading OKX continues global expansion with Australia launch\nThe post OKX continues global expan…",
        "url": "https://readwrite.com/okx-continues-global-expansion-with-australia-launch/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/60faf27f-3265-4d1f-9059-a8e01f3dbce6.webp",
        "publishedAt": "2024-05-14T14:40:41Z",
        "content": "OKX, a prominent global digital asset exchange, has officially commenced operations in Australia, marking a significant milestone since establishing its Sydney office in May 2023. The launch, announc… [+2226 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Suswati Basu",
        "title": "Elon Musk’s X platform ‘end goal’ could shake up crypto market",
        "description": "An executive at Elon Musk’s social media company X has revealed the platform’s payments “end goal” could play havoc with… Continue reading Elon Musk’s X platform ‘end goal’ could shake up crypto market\nThe post Elon Musk’s X platform ‘end goal’ could shake up…",
        "url": "https://readwrite.com/elon-musks-x-platform-end-goal-could-shake-up-crypto-market/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/04/Elon-Musks-X-platform-could-shake-up-crypto-market.png",
        "publishedAt": "2024-04-29T12:53:58Z",
        "content": "An executive at Elon Musk’s social media company X has revealed the platform’s payments “end goal” could play havoc with the Bitcoin price and wider crypto market.\r\nMusk has previously stated his des… [+2735 chars]"
      },
      {
        "source": {
          "id": "wired",
          "name": "Wired"
        },
        "author": "Paul Ford",
        "title": "Generative AI Is Totally Shameless. I Want to Be It",
        "description": "The best thing about brain-melting software like ChatGPT? It doesn’t feel remorse.",
        "url": "https://www.wired.com/story/generative-ai-totally-shameless/",
        "urlToImage": "https://media.wired.com/photos/662a84cc8d7b95bed51a129c/191:100/w_1280,c_limit/WIRED-JAN_TwishaP_Shameless-Software_FINAL.jpg",
        "publishedAt": "2024-05-14T12:00:00Z",
        "content": "AI has a lot of problems. It helps itself to the work of others, regurgitating what it absorbs in a game of multidimensional Mad Libs and omitting all attribution, resulting in widespread outrage and… [+4784 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Xataka.com"
        },
        "author": "Enrique Pérez",
        "title": "El Bitcoin Halving ya está aquí. Así se prepara el sector cripto para su momento más importante cada cuatro años",
        "description": "Faltan unas pocas horas para el Bitcoin Halving 2024. Es el acontecimiento más importante del mundo cripto cada cuatro años. Uno que forma parte de la propia estructura de la criptomoneda más popular del mundo y por el cual la recompensa de cada bloque se div…",
        "url": "https://www.xataka.com/criptomonedas/bitcoin-halving-esta-aqui-asi-se-prepara-sector-cripto-para-su-momento-importante-cada-cuatro-anos",
        "urlToImage": "https://i.blogs.es/d712a7/bitcoin-halving-2024---michael-fortsch/840_560.jpeg",
        "publishedAt": "2024-04-19T17:31:07Z",
        "content": "Faltan unas pocas horas para el Bitcoin Halving 2024. Es el acontecimiento más importante del mundo cripto cada cuatro años. Uno que forma parte de la propia estructura de la criptomoneda más popular… [+3901 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Petar Jovanović",
        "title": "Meme Coin Price Predictions As Market Recovers – WIF, BONK, SHIB",
        "description": "The crypto market has rebounded nicely over the past two days, with Bitcoin bouncing off lows around the $56,000 level… Continue reading Meme Coin Price Predictions As Market Recovers – WIF, BONK, SHIB\nThe post Meme Coin Price Predictions As Market Recovers –…",
        "url": "https://readwrite.com/meme-coin-price-predictions-as-market-recovers-wif-bonk-shib/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/meme-coin-shiba-inu.jpg",
        "publishedAt": "2024-05-05T07:22:42Z",
        "content": "The crypto market has rebounded nicely over the past two days, with Bitcoin bouncing off lows around the $56,000 level to current prices near $64,000. This positive momentum has impacted various sect… [+4536 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Arslan Butt",
        "title": "Rollbit Coin Price Prediction With RLB Token Burn – Channel Breakout Next?",
        "description": "The Rollbit Coin (RLB) price dipped to just under $0.12 today alongside the wider crypto market decline, with Bitcoin in… Continue reading Rollbit Coin Price Prediction With RLB Token Burn – Channel Breakout Next?\nThe post Rollbit Coin Price Prediction With R…",
        "url": "https://readwrite.com/rollbit-coin-price-prediction-rlb-token-burn-channel-breakout-next/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/04/rollbit-coin.png",
        "publishedAt": "2024-04-29T19:13:23Z",
        "content": "The Rollbit Coin (RLB) price dipped to just under $0.12 today alongside the wider crypto market decline, with Bitcoin in the red today.\r\nWith a current market capitalization of $335 million, RLB is i… [+5567 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Xataka.com"
        },
        "author": "Enrique Pérez",
        "title": "La minería Bitcoin se enfrenta a un terreno inexplorado después del halving. El fundador de Twitter tiene la solución",
        "description": "Los mineros del Bitcoin tenían apuntada la fecha del halving en su calendario desde hace tiempo. Aunque han habido grandes avances tecnológicos en las máquinas de minería cripto, la reducción a la mitad de la recompensa ha puesto a muchos mineros en apuros. P…",
        "url": "https://www.xataka.com/criptomonedas/mineria-bitcoin-se-enfrenta-a-terreno-inexplorado-despues-halving-fundador-twitter-tiene-solucion",
        "urlToImage": "https://i.blogs.es/1b73fa/jack-dorsey-block/840_560.jpeg",
        "publishedAt": "2024-04-25T16:30:52Z",
        "content": "Los mineros del Bitcoin tenían apuntada la fecha del halving en su calendario desde hace tiempo. Aunque han habido grandes avances tecnológicos en las máquinas de minería cripto, la reducción a la mi… [+2980 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Xataka.com"
        },
        "author": "Enrique Pérez",
        "title": "Detenido 'Bitcoin Jesus' en España, el pionero inversor cripto acusado de evadir más de 45 millones de euros",
        "description": "Otro inversor cripto de referencia ha sido detenido. Si la semana pasada se condenó a prisión al CEO de Binance, ahora es el ex-CEO de Bitcoin.com el que ha sido detenido por fraude fiscal. Roger Ver, nacido en San José y residente en Japón, fue uno de los pr…",
        "url": "https://www.xataka.com/criptomonedas/detenido-bitcoin-jesus-espana-pionero-inversor-cripto-acusado-evadir-45-millones-euros",
        "urlToImage": "https://i.blogs.es/003c34/roger-ver/840_560.jpeg",
        "publishedAt": "2024-05-06T10:00:54Z",
        "content": "Otro inversor cripto de referencia ha sido detenido. Si la semana pasada se condenó a prisión al CEO de Binance, ahora es el ex-CEO de Bitcoin.com el que ha sido detenido por fraude fiscal. Roger Ver… [+2020 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": null,
        "title": "State of Wisconsin Buys Nearly $100M Worth of BlackRock Spot Bitcoin ETF",
        "description": null,
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_01a02dc9-9735-405b-92c0-7cb63999b246",
        "urlToImage": null,
        "publishedAt": "2024-05-14T14:47:36Z",
        "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Kraken.com"
        },
        "author": ", KrakenFX",
        "title": "Why there will never be another Bitcoin",
        "description": "On October 31, 2008, an unknown coder named Satoshi Nakamoto published a paper that laid the foundation for an entirely new monetary system – 15 years later, the world is only just catching on to its true value and potential.",
        "url": "https://blog.kraken.com/crypto-education/opinion-why-there-will-never-be-another-bitcoin",
        "urlToImage": "https://blog.kraken.com/wp-content/uploads/2023/09/Blog-BTC.png",
        "publishedAt": "2024-04-19T22:44:38Z",
        "content": "By Pete Rizzo, Kraken Editor at Large\r\nPete Rizzo is a leading Bitcoin Historian and author of over 2,000 articles on cryptocurrency. He is also an Editor at Bitcoin Magazine.\r\nThe views and opinions… [+12052 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Crypto trader loses $69 million to ‘address poisoning’ scam",
        "description": "A cryptocurrency trader has reportedly fallen victim to a sophisticated “address poisoning” scam, resulting in the loss of tens of… Continue reading Crypto trader loses $69 million to ‘address poisoning’ scam\nThe post Crypto trader loses $69 million to ‘addre…",
        "url": "https://readwrite.com/crypto-trader-loses-69-million-to-address-poisoning-scam/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/b456024d-3242-47a8-9a3b-9fc6c67e388d.webp",
        "publishedAt": "2024-05-06T11:45:17Z",
        "content": "A cryptocurrency trader has reportedly fallen victim to a sophisticated “address poisoning” scam, resulting in the loss of tens of millions of dollars.\r\nAddress poisoning is a type of fraud where sca… [+2481 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Xataka.com"
        },
        "author": "Javier Lacort",
        "title": "Si 2024 está siendo bueno para Bitcoin, para Coinbase lo está siendo aún más. Y ya ha revelado cómo piensa seguir creciendo",
        "description": "Con el mercado crypto en ebullición en buena medida por el reciente halving de Bitcoin, Coinbase ha cerrado un primer trimestre de año espectacular, disparando sus ingresos y sobre todo sus beneficios.\n<!-- BREAK 1 -->\nAdemás de consolidar un gran crecimiento…",
        "url": "https://www.xataka.com/criptomonedas/2024-esta-siendo-bueno-para-bitcoin-para-coinbase-esta-siendo-ha-revelado-como-piensa-seguir-creciendo",
        "urlToImage": "https://i.blogs.es/fc5352/jlacort_a_bitcopithe_bitcoin_logo_hangs_from_a_thread_danglin_b6c72670-a6b8-4619-a3c5-d3c1ceecfef7_3/840_560.jpeg",
        "publishedAt": "2024-05-07T13:01:13Z",
        "content": "Con el mercado crypto en ebullición en buena medida por el reciente halving de Bitcoin, Coinbase ha cerrado un primer trimestre de año espectacular, disparando sus ingresos y sobre todo sus beneficio… [+2231 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "NPR"
        },
        "author": "The Associated Press",
        "title": "FTX says it will return money to most of its customers",
        "description": "FTX says that nearly all of its customers will receive the money back that they are owed, two years after the cryptocurrency exchange imploded, and some will get more than that.",
        "url": "https://www.npr.org/2024/05/09/1250133251/ftx-says-it-will-return-money-to-most-of-its-customers",
        "urlToImage": "https://media.npr.org/assets/img/2024/05/09/ap24129447660507_wide-3a502238aa240335535541bf1a1f93a8d666d685.jpg?s=1400&c=100&f=jpeg",
        "publishedAt": "2024-05-09T05:23:51Z",
        "content": "The FTX logo appears on home plate umpire Jansen Visconti's jacket at a baseball game with the Minnesota Twins on Sept. 27, 2022, in Minneapolis.\r\nBruce Kluckhohn/AP\r\nFTX says that nearly all of its … [+3371 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Joshua Zitser",
        "title": "A hacker got 6 years in prison for stealing therapy notes and blackmailing patients",
        "description": "Aleksanteri Kivimäki was found guilty of hacking a therapy company and trying to extort its patients. He was sentenced to over six years in prison.",
        "url": "https://www.businessinsider.com/hacker-stole-therapy-notes-blackmailed-thousands-of-patients-prison-sentence-2024-5",
        "urlToImage": "https://i.insider.com/66321a0910dfcda409652fc8?width=1200&format=jpeg",
        "publishedAt": "2024-05-01T11:23:06Z",
        "content": "A stock image shows a therapist making notes ahead of a session with a patient.Tanja Ivanova/Getty Images\r\n<ul><li>Hacker Aleksanteri 'Julius' Kivimäki was sentenced to over six years in prison.</li>… [+3452 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "yzhan@insider.com (Yuheng Zhan)",
        "title": "Stock market today: Indexes mixed as jobless claims jump to highest since August",
        "description": "Stock futures pared some losses heading into the opening bell as the market digested the latest jobless claims data.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-today-jobless-claims-highest-since-august-fed-rates-2024-5",
        "urlToImage": "https://i.insider.com/663cd4809686a6f37bfd8cb8?width=1200&format=jpeg",
        "publishedAt": "2024-05-09T13:52:08Z",
        "content": "Major stock indexes were mixed on Thursday as traders mulled a fresh job report that showed the labor market cooling. \r\nStock futures reversed course to rise into the open after jobless claims rose t… [+1625 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Justice.gov"
        },
        "author": null,
        "title": "Early Bitcoin Investor Roger Ver Charged with Tax Fraud",
        "description": "An indictment was unsealed charging Roger Ver, an early investor in bitcoins, with mail fraud, tax evasion and filing false tax returns. Ver was arrested this weekend in Spain based on the U.S. criminal charges. The United States will seek Ver’s extradition t…",
        "url": "https://www.justice.gov/opa/pr/early-bitcoin-investor-charged-tax-fraud",
        "urlToImage": "https://www.justice.gov/sites/all/modules/features/doj_sharing/images/doj-seal-fb.jpg",
        "publishedAt": "2024-05-01T04:38:35Z",
        "content": "An indictment was unsealed yesterday charging Roger Ver, an early investor in bitcoins, with mail fraud, tax evasion and filing false tax returns. Ver was arrested this weekend in Spain based on the … [+3303 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "heise online"
        },
        "author": "Mark Mantel",
        "title": "Bitcoin: Die Blockbelohnungen und Inflation sind jetzt halbiert",
        "description": "Das vierte Bitcoin-Halving fand am Wochenende statt. Dadurch kommen weniger Bitcoins in Umlauf. Miner kümmert das bisher aber wenig.",
        "url": "https://www.heise.de/news/Bitcoin-Die-Blockbelohnungen-und-Inflation-sind-jetzt-halbiert-9693973.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/7/7/2/9/3/shutterstock_1841762269-1efce39393fb55d5.jpg",
        "publishedAt": "2024-04-22T15:18:00Z",
        "content": "In der Nacht von Freitag auf Samstag wurde der 840.000. Bitcoin-Block geschürft. Mit ihm fand das vierte sogenannte Halving statt: Miner bekommen pro geschürftem Block seitdem nur noch halb so hohe B… [+1619 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Chinese authorities shut down illegal crypto service",
        "description": "Chinese authorities have shut down an underground bank that facilitated illegal currency exchange between the Chinese yuan and South Korean… Continue reading Chinese authorities shut down illegal crypto service\nThe post Chinese authorities shut down illegal c…",
        "url": "https://readwrite.com/chinese-authorities-shut-down-illegal-crypto-service/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/9fe82a1e-70a8-42a2-9c99-976955fd3ccd.webp",
        "publishedAt": "2024-05-13T12:27:38Z",
        "content": "Chinese authorities have shut down an underground bank that facilitated illegal currency exchange between the Chinese yuan and South Korean won, using cryptocurrency as a medium.\r\nPolice announced on… [+3465 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "James Spillane",
        "title": "Bonk Coin Price Up 40%, Is Slothana The Next Solana Meme Token To Explode",
        "description": "Bonk price chart weekly timeframe, source – Tradingview Bonk (BONK) has exploded by 40% in the past 24 hours, the… Continue reading Bonk Coin Price Up 40%, Is Slothana The Next Solana Meme Token To Explode\nThe post Bonk Coin Price Up 40%, Is Slothana The Next…",
        "url": "https://readwrite.com/bonk-coin-price-up-40-is-slothana-the-next-solana-meme-token-to-explode/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/04/bonk-price-chart.png",
        "publishedAt": "2024-04-21T15:08:49Z",
        "content": "Bonk price chart weekly timeframe, source – Tradingview\r\nBonk (BONK) has exploded by 40% in the past 24 hours, currently the best performer of any meme coin in the top ten (of which Bonk ranks #6) an… [+2610 chars]"
      },
      {
        "source": {
          "id": "the-next-web",
          "name": "The Next Web"
        },
        "author": "Thomas Macaulay",
        "title": "New AI technique detects money laundering via cryptocurrencies",
        "description": "Blockchain is often criticised as a solution in search of a problem. But one group of people has already found immense value in the tech: money launderers. Their crimes cause painful headaches for financial institutions, crypto businesses, legitimate law enfo…",
        "url": "https://thenextweb.com/news/ai-detects-money-laundering-through-cryptocurrencies-on-bitcoin-blockchain",
        "urlToImage": "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2024%2F05%2FUntitled-design.jpg&signature=0c9173ae60101b19697c5dc6703bfb52",
        "publishedAt": "2024-05-01T15:07:26Z",
        "content": "Blockchain is often criticised as a solution in search of a problem. But one group of people has already found immense value in the tech: money launderers.\r\nTheir crimes cause painful headaches for f… [+4503 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "yzhan@insider.com (Yuheng Zhan)",
        "title": "Stock market today: Stocks slide for 5th session as Fed officials cast more doubt on rate cuts",
        "description": "The S&P 500 hit its worst losing streak since last October as investors recalibrate amid forecasts for interest rates to remain high.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-fifth-loss-fed-speakers-rate-cuts-delay-2024-4",
        "urlToImage": "https://i.insider.com/6621667710c6b0cde5f0d80d?width=1200&format=jpeg",
        "publishedAt": "2024-04-18T20:06:04Z",
        "content": "US stocks on Thursday extended their losing streak to a fifth day, marking the longest downturn for the S&amp;P 500 since October.  \r\nMore cold water was poured on rate-cut hopes throughout the day, … [+2013 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "James Spillane",
        "title": "300,000 Tether (USDT) Pot Played At Crypto Poker Site ‘CoinPoker’ – Tony G Vs Whale",
        "description": "Cryptocurrency poker website ‘CoinPoker’ hosted high stakes action this weekend, with celebrity player Tony G and a whale in the… Continue reading 300,000 Tether (USDT) Pot Played At Crypto Poker Site ‘CoinPoker’ – Tony G Vs Whale\nThe post 300,000 Tether (USD…",
        "url": "https://readwrite.com/300000-tether-usdt-pot-played-at-crypto-poker-site-coinpoker-tony-g-vs-whale/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/04/coinpoker.png",
        "publishedAt": "2024-04-23T04:50:06Z",
        "content": "Cryptocurrency poker website ‘CoinPoker’ hosted high stakes action this weekend, with celebrity player Tony G and a whale in the thick of the heads up action.\r\nTracked on the 2+2 poker forum, the han… [+1733 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "Australia pursues crypto buyers’ info in tax probe",
        "description": "The Australian Taxation Office (ATO) is seeking transaction data on up to 1.2 million accounts from crypto exchanges in a… Continue reading Australia pursues crypto buyers’ info in tax probe\nThe post Australia pursues crypto buyers’ info in tax probe appeared…",
        "url": "https://readwrite.com/australia-pursues-crypto-buyers-info-in-tax-probe/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/8513661a-3052-4156-96f2-f2bd041f78f7.webp",
        "publishedAt": "2024-05-07T22:22:41Z",
        "content": "The Australian Taxation Office (ATO) is seeking transaction data on up to 1.2 million accounts from crypto exchanges in a bid to identify tax evading users. The news follows recent reports that appro… [+1713 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Suswati Basu",
        "title": "Hackers ‘steal Ready or Not developer’s source code’",
        "description": "Hackers have stolen millions of files from the studio that developed the controversial hit Steam shooter, Ready or Not, according… Continue reading Hackers ‘steal Ready or Not developer’s source code’\nThe post Hackers ‘steal Ready or Not developer’s source co…",
        "url": "https://readwrite.com/hackers-steal-ready-or-not-developers-source-code/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/04/Hackers-steal-Ready-or-Not-developers-source-code.png",
        "publishedAt": "2024-04-17T13:58:38Z",
        "content": "Hackers have stolen millions of files from the studio that developed the controversial hit Steam shooter, Ready or Not, according to reports. The stolen data includes the game’s source code and build… [+1796 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "UK is aiming to regulate cryptocurrencies by July 2024",
        "description": "The United Kingdom Treasury plans to introduce a regulatory framework for cryptocurrencies and stablecoins by July 2024. The goal is… Continue reading UK is aiming to regulate cryptocurrencies by July 2024\nThe post UK is aiming to regulate cryptocurrencies by…",
        "url": "https://readwrite.com/uk-treasury-crypto-regulations-july-2024/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/04/fpbT_R0DSN68NqTjIKL02Q.jpg",
        "publishedAt": "2024-04-16T16:08:23Z",
        "content": "The United Kingdom Treasury plans to introduce a regulatory framework for cryptocurrencies and stablecoins by July 2024. The goal is to foster local innovation in digital assets and blockchain techno… [+1880 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Golem.de"
        },
        "author": "Stephan Lamprecht",
        "title": "(g+) Kryptowährung: Drei Irrtümer zum Bitcoin-Halving",
        "description": "Das medial mit Spannung erwartete Bitcoin-Halving hat stattgefunden. Vorerst ist das prognostizierte Kursfeuerwerk ausgeblieben Von Stephan Lamprecht (Bitcoin, Börse)",
        "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fkryptowaehrung-drei-irrtuemer-zum-bitcoin-halving-2405-184778.html&referer=https%3A%2F%2Ft.co%2F34fb41a0d2",
        "urlToImage": null,
        "publishedAt": "2024-05-06T10:00:02Z",
        "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Golem.de"
        },
        "author": "Peter Steinlechner",
        "title": "Kursentwicklung: Bitcoin fällt unter 58.000 US-Dollar",
        "description": "Die Rallye der Digitalwährungen seit Jahresbeginn 2024 hat Anleger\nerfreut. Die Kurse von Bitcoin & Co. kennen aber auch eine andere Richtung. (Bitcoin, Wirtschaft)",
        "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fkursentwicklung-bitcoin-faellt-unter-58-000-us-dollar-2405-184740.html&referer=https%3A%2F%2Ft.co%2F6ea5b4efcc",
        "urlToImage": null,
        "publishedAt": "2024-05-01T10:33:02Z",
        "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "heise online"
        },
        "author": "Stefan Krempl",
        "title": "Dresdner Anklage gegen weiteren mutmaßlichen movie2k-Betreiber",
        "description": "Die Generalstaatsanwaltschaft Dresden macht einem weiteren Verdächtigen hinter dem Streamingportal movie2k den Prozess. Bitcoins wurden \"notveräußert\".​",
        "url": "https://www.heise.de/news/Dresdner-Anklage-gegen-weiteren-mutmasslichen-movie2k-Betreiber-9688874.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/7/4/6/2/5/Fernseher-32b6524d229b30b1.jpg",
        "publishedAt": "2024-04-17T22:01:00Z",
        "content": "Gegen einen mutmaßlichen weiteren Hauptbetreiber und einen Mitarbeiter des bis Ende Mai 2013 online verfügbaren illegalen Streamingportals movie2K läuft nun ein Strafprozess in Leipzig. Eine Sonderer… [+2911 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Emily Stewart",
        "title": "The sad, disappointing return of Roaring Kitty",
        "description": "Roaring Kitty is tweeting after a three-year hiatus, and meme stocks like GameStop and AMC are going crazy. But the latest craze seems a bit hollow.",
        "url": "https://www.businessinsider.com/roaring-kitty-tweets-gamestop-amc-meme-stocks-crypto-sad-2024-5",
        "urlToImage": "https://i.insider.com/6644bc18f27898f532d7cab9?width=1200&format=jpeg",
        "publishedAt": "2024-05-16T09:57:01Z",
        "content": "Roaring Kitty's return has caused meme-stock chaos. But the latest mania seems destined to crash.Roaring Kitty; Getty Images; Alyssa Powell/BI\r\nIt was kind of cool that Keith Gill walked off into the… [+4721 chars]"
      },
      {
        "source": {
          "id": "ars-technica",
          "name": "Ars Technica"
        },
        "author": "Kevin Purdy",
        "title": "Billions of public Discord messages may be sold through a scraping service",
        "description": "Cross-server tracking suggests a new understanding of \"public\" chat servers.",
        "url": "https://arstechnica.com/tech-policy/2024/04/billions-of-public-discord-messages-may-be-sold-through-a-scraping-service/",
        "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2024/04/GettyImages-2147879682-760x380.jpg",
        "publishedAt": "2024-04-17T19:42:36Z",
        "content": "9\r\nIt's easy to get the impression that Discord chat messages are ephemeral, especially across different public servers, where lines fly upward at a near-unreadable pace. But someone claims to be cat… [+2837 chars]"
      },
      {
        "source": {
          "id": "die-zeit",
          "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: Wirtschaft - Lisa Pausch",
        "title": "Kryptowährungen: Bitcoin-Halving abgeschlossen",
        "description": "Etwa alle vier Jahre halbiert sich der Nachschub an neuen Bitcoins, die an großen Rechnern geschürft werden. Das dürfte langfristig den Preis nach oben treiben.",
        "url": "https://www.zeit.de/wirtschaft/geldanlage/2024-04/bitcoin-halving-krypto-investition",
        "urlToImage": "https://img.zeit.de/wirtschaft/geldanlage/2024-04/bitcoin-bilder/wide__1300x731",
        "publishedAt": "2024-04-20T01:59:42Z",
        "content": "Am Freitag hat das sogenannte Halving der weltweit größten KryptowährungBitcoin stattgefunden. Das berichtet die Daten- und Analysefirma CoinGecko. \r\nUnmittelbar danach blieb der Bitcoin relativ stab… [+3850 chars]"
      },
      {
        "source": {
          "id": "die-zeit",
          "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: Geld - Nathanael Häfner",
        "title": "Bitcoin-Halving: Auch halbierter Mist bleibt Mist",
        "description": "Die Zahl der Bitcoin wächst nun langsamer. Ob der Wert der Kryptowährung damit steigt, ist nicht gesagt. Der Bitcoin bleibt hochspekulativ und schadet der Gesellschaft.",
        "url": "https://www.zeit.de/geld/2024-04/bitcoin-halving-kryptowaehrung-kurs-wert",
        "urlToImage": "https://img.zeit.de/geld/2024-04/bitcoin-halving-kryptowaehrung-kurs/wide__1300x731",
        "publishedAt": "2024-04-20T07:24:31Z",
        "content": "Lange haben die Bitcoin-Jünger es herbeigesehnt, nun\r\nfand das sogenannte Halving endlich statt. Das Tempo, mit dem neue Bitcoin\r\nentstehen, halbiert sich dadurch. Dazu muss man wissen: Alle Bitcoin-… [+662 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Petar Jovanović",
        "title": "Crypto Trader Makes 250% Profit With This Solana Meme Coin, PEPE Price Hits New ATH",
        "description": "The meme sector is once again producing gains for investors, with Solana meme coin Slothana (SLOTH) and PEPE among the… Continue reading Crypto Trader Makes 250% Profit With This Solana Meme Coin, PEPE Price Hits New ATH\nThe post Crypto Trader Makes 250% Prof…",
        "url": "https://readwrite.com/crypto-trader-makes-250-profit-with-this-solana-meme-coin-pepe-price-hits-new-ath/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/SLOTHANA.png",
        "publishedAt": "2024-05-14T10:19:50Z",
        "content": "The meme sector is once again producing gains for investors, with Solana meme coin Slothana (SLOTH) and PEPE among the hottest stories this week.\r\nAccording to data from Dextools, the PEPE token hit … [+4214 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "9to5Mac"
        },
        "author": "Ben Lovejoy",
        "title": "FTX customers to get their money back in full (with asterisk) [U]",
        "description": "Update: A court filing has confirmed that the company now has more than enough money to repay customers. In recognition of the lost gains, creditors owed $50k or less will receive around 118% of their deposit value at the time of the Chapter 11 filing.\n\n\n\nIn …",
        "url": "https://9to5mac.com/2024/05/08/ftx-customers-money/",
        "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/FTX-customers.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2024-05-08T13:26:08Z",
        "content": "Update: A court filing has confirmed that the company now has more than enough money to repay customers. In recognition of the lost gains, creditors owed $50k or less will receive around 118% of thei… [+2061 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Radek Zielinski",
        "title": "US presidential candidate RFK to speak at crypto conference",
        "description": "Independent U.S. presidential candidate known for his pro-cryptocurrency stance Robert F. Kennedy Jr. is set to speak at the upcoming… Continue reading US presidential candidate RFK to speak at crypto conference\nThe post US presidential candidate RFK to speak…",
        "url": "https://readwrite.com/us-presidential-candidate-rfk-to-speak-at-crypto-conference/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/806b496f-17b5-4227-b8b6-48bfc34eb892.webp",
        "publishedAt": "2024-05-08T16:33:01Z",
        "content": "Independent U.S. presidential candidate known for his pro-cryptocurrency stance Robert F. Kennedy Jr. is set to speak at the upcoming Consensus 2024 crypto conference in Austin, Texas.\r\nKennedy will … [+2146 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Petar Jovanović",
        "title": "Dogecoin Maxi DonAlt Posts $1 Price Prediction – Risk On For Meme Coins?",
        "description": "DonAlt, A crypto veteran who has been in the industry for many years and witnessed previous bull runs, tweeted yesterday… Continue reading Dogecoin Maxi DonAlt Posts $1 Price Prediction – Risk On For Meme Coins?\nThe post Dogecoin Maxi DonAlt Posts $1 Price Pr…",
        "url": "https://readwrite.com/donalt-now-a-dogecoin-maxi-tweets-1-price-prediction-time-to-buy-meme-coins/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/dogecoin-trading.jpg",
        "publishedAt": "2024-05-05T20:32:19Z",
        "content": "DonAlt, A crypto veteran who has been in the industry for many years and witnessed previous bull runs, tweeted yesterday to announce that he has become a “Doge maxi.” \r\nFor those unfamiliar with the … [+2325 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Graeme Hanna",
        "title": "Donald Trump courts the crypto vote, Biden warned",
        "description": "“If you’re for crypto, you better vote for Trump.” The message was simple and it came from the man himself,… Continue reading Donald Trump courts the crypto vote, Biden warned\nThe post Donald Trump courts the crypto vote, Biden warned appeared first on ReadWr…",
        "url": "https://readwrite.com/donald-trump-courts-the-crypto-vote-biden-warned/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/rX9Gq8GvR2i1nv03sVMpDg.jpg",
        "publishedAt": "2024-05-13T12:17:33Z",
        "content": "“If you’re for crypto, you better vote for Trump.”\r\nThe message was simple and it came from the man himself, Donald J Trump, at a special gathering at his Mar-A-Lago resort last week.\r\nAs reported by… [+2425 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "tmohamed@insider.com (Theron Mohamed)",
        "title": "Jamie Dimon warns the world order is being challenged — and bashes crypto once more",
        "description": "JPMorgan's CEO warned of sticky inflation, rising interest rates, recession, and global turmoil, while panning crypto's lack of progress.",
        "url": "https://www.businessinsider.com/jpmorgan-jamie-dimon-economy-inflation-recession-stagflation-geopolitics-crypto-bitcoin-2024-4",
        "urlToImage": "https://i.insider.com/6628e45d0dfb1341e9fe56ca?width=1200&format=jpeg",
        "publishedAt": "2024-04-24T11:33:26Z",
        "content": "Most people are financially healthy, but economic and geopolitical threats could spoil the party, Jamie Dimon warned on Tuesday.\r\nConsumers have seen their homes and stock portfolios surge in value i… [+2601 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": "Will Shanklin",
        "title": "Block reportedly greenlit transactions involving terrorist groups and sanctioned nations",
        "description": "Block appears to be squarely in the government’s sights. Prosecutors from the Southern District of New York are reportedly probing extensive compliance lapses at the parent company of Square and Cash App. NBC News says a former Block employee has handed over …",
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_42a6092c-1262-4c95-9f24-7d3681ec2288",
        "urlToImage": null,
        "publishedAt": "2024-05-01T18:12:23Z",
        "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Xataka.com"
        },
        "author": "Javier Marquez",
        "title": "FTX recupera millones de dólares y hace una importante promesa: los clientes recuperarán su dinero (y con intereses)",
        "description": "Cuando FTX colapsó en noviembre de 2022, muchos de sus clientes probablemente pensaron que no recuperarían su dinero. El intercambio de criptomonedas había caído en bancarrota después de una breve pero letal crisis principalmente alimentada por las maniobras …",
        "url": "https://www.xataka.com/criptomonedas/ftx-recupera-millones-dolares-hace-importante-promesa-clientes-recuperaran-su-dinero-intereses",
        "urlToImage": "https://i.blogs.es/187c7a/ftx-1/840_560.jpeg",
        "publishedAt": "2024-05-08T23:23:26Z",
        "content": "Cuando FTX colapsó en noviembre de 2022, muchos de sus clientes probablemente pensaron que no recuperarían su dinero. El intercambio de criptomonedas había caído en bancarrota después de una breve pe… [+3106 chars]"
      },
      {
        "source": {
          "id": "die-zeit",
          "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: News -",
        "title": "Kryptowährung: Rekordhoch oder Absturz: Wie geht es mit dem Bitcoin weiter?",
        "description": "Hier finden Sie Informationen zu dem Thema „Kryptowährung“. Lesen Sie jetzt „Rekordhoch oder Absturz: Wie geht es mit dem Bitcoin weiter?“.",
        "url": "https://www.zeit.de/news/2024-04/19/rekordhoch-oder-absturz-wie-geht-es-mit-dem-bitcoin-weiter",
        "urlToImage": "https://img.zeit.de/news/2024-04/19/rekordhoch-oder-absturz-wie-geht-es-mit-dem-bitcoin-weiter-image-group/wide__1300x731",
        "publishedAt": "2024-04-19T05:14:12Z",
        "content": "Die Digitalwährung Bitcoin ist eigentlich nichts für schwache Nerven. In diesen Wochen schauen die Besitzer der ältesten und größten Kryptowährung allerdings eher entspannt in ihre digitalen Brieftas… [+6313 chars]"
      },
      {
        "source": {
          "id": "die-zeit",
          "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: News -",
        "title": "Digitalwährungen: Krypto-Kurse sacken ab - Bitcoin fällt unter 58.000 Dollar",
        "description": "Hier finden Sie Informationen zu dem Thema „Digitalwährungen“. Lesen Sie jetzt „Krypto-Kurse sacken ab - Bitcoin fällt unter 58.000 Dollar“.",
        "url": "https://www.zeit.de/news/2024-05/01/krypto-kurse-sacken-ab-bitcoin-faellt-unter-58-000-dollar",
        "urlToImage": "https://img.zeit.de/news/2024-05/01/krypto-kurse-sacken-ab-bitcoin-faellt-unter-58-000-dollar-image-group/wide__1300x731",
        "publishedAt": "2024-05-01T10:02:58Z",
        "content": "Der Kurse der wichtigsten Digitalwährungen sind in der Walpurgisnacht auf breiter Front eingebrochen. Der Wert des Bitcoin lag am Mittwoch bei der Handelsplattform Bitfinex nur noch knapp über 57.000… [+1052 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Wendy Prinsloo",
        "title": "Best Online Casinos Australia for Real Money in 2024",
        "description": "The best real-money online casinos in Australia offer the latest games and promotions for players from Sydney to Perth. Play… Continue reading Best Online Casinos Australia for Real Money in 2024\nThe post Best Online Casinos Australia for Real Money in 2024 a…",
        "url": "https://readwrite.com/best-online-casinos-australia/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2023/08/Australia-Online-Casinos-scaled.jpg",
        "publishedAt": "2024-05-10T12:53:25Z",
        "content": "The best real-money online casinos in Australia offer the latest games and promotions for players from Sydney to Perth. Play Australian casino games for free or hit the newest pokies and win the jack… [+26111 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Matthew Loh",
        "title": "Jack Dorsey said Twitter's board 'has always been a problem' and that he plotted his exit from the firm because of its activist investor",
        "description": "Before leaving Twitter in 2021, Dorsey faced pressure from Elliott Management, which wanted to replace him as CEO because he was also running Square.",
        "url": "https://www.businessinsider.com/jack-dorsey-plotted-exit-twitter-due-activist-investor-2024-5",
        "urlToImage": "https://i.insider.com/663db7b5b4abc992e8c7da06?width=1200&format=jpeg",
        "publishedAt": "2024-05-10T06:42:19Z",
        "content": "Jack Dorsey creator, co-founder, and Chairman of Twitter and co-founder & CEO of Square, speaks during the crypto-currency conference Bitcoin 2021 Convention at the Mana Convention Center in Miami, F… [+3401 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Peter Kafka",
        "title": "Crypto prices are back. So are the TV ads.",
        "description": "One sign we're in a crypto revival: Prices are roaring. Another? Crypto companies are advertising on TV again.",
        "url": "https://www.businessinsider.com/crypto-ads-return-tv-prices-rise-meme-stock-bitcoin-2024-5",
        "urlToImage": "https://i.insider.com/664242cef27898f532d711df?width=1200&format=jpeg",
        "publishedAt": "2024-05-13T16:56:35Z",
        "content": "Ads for cryptocurrencies, like this one for Crypto.com, are back on TV.Crypto.com\r\n<ul><li>Crypto markets are booming again.</li><li>Now crypto companies are advertising on TV — just like they did in… [+2950 chars]"
      },
      {
        "source": {
          "id": "die-zeit",
          "name": "Die Zeit"
        },
        "author": "ZEIT ONLINE: News -",
        "title": "Oberbayern: Frau verliert rund 45.000 Euro durch Bitcoin-Betrug",
        "description": "Hier finden Sie Informationen zu dem Thema „Oberbayern“. Lesen Sie jetzt „Frau verliert rund 45.000 Euro durch Bitcoin-Betrug“.",
        "url": "https://www.zeit.de/news/2024-05/04/frau-verliert-rund-45-000-euro-durch-bitcoin-betrug",
        "urlToImage": "https://img.zeit.de/news/2024-05/04/frau-verliert-rund-45-000-euro-durch-bitcoin-betrug-image-group/wide__1300x731",
        "publishedAt": "2024-05-04T13:50:17Z",
        "content": "Eine Frau in Oberbayern hat durch eine Bitcoin-Betrugsmasche rund 45.000 Euro verloren. Im Internet soll die Geschädigte auf eine Werbung zur Anlage in Bitcoins aufmerksam geworden, teilte die Polize… [+444 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "tagesschau.de"
        },
        "author": "tagesschau.de",
        "title": "Was das Bitcoin-Halving bedeutet",
        "description": "Am Wochenende könnte es zum nächsten sogenannten Halving beim Bitcoin kommen. Ob es die Kurse der ältesten Kryptowährung aber tatsächlich beeinflusst, darüber wird gestritten. Worum geht es konkret?",
        "url": "https://www.tagesschau.de/wirtschaft/finanzen/kryptowaehrungen-bitcoin-halving-100.html",
        "urlToImage": "https://images.tagesschau.de/image/f9b130e2-36b7-485a-8739-09357da74f54/AAABjvXy1Gg/AAABjcWen7M/16x9-1280/bitcoin-192.jpg",
        "publishedAt": "2024-04-19T11:15:52Z",
        "content": "Stand: 19.04.2024 13:15 Uhr\r\nAm Wochenende könnte es zum nächsten sogenannten Halving beim Bitcoin kommen. Ob es die Kurse der ältesten Kryptowährung aber tatsächlich beeinflusst, darüber wird gestri… [+8241 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Tim.blog"
        },
        "author": "Tim Ferriss",
        "title": "Live 10th Anniversary Random Show with Kevin Rose — Exploring What’s Next, Testing Ozempic, Modern Dating, New Breakthrough Treatments for Anxiety, Bitcoin ETFs, Mike Tyson vs. Jake Paul, and Engineering More Awe in Your Life (#733)",
        "description": "Live 10th Anniversary Random Show with Kevin Rose!\nThe post Live 10th Anniversary Random Show with Kevin Rose — Exploring What’s Next, Testing Ozempic, Modern Dating, New Breakthrough Treatments for Anxiety, Bitcoin ETFs, Mike Tyson vs. Jake Paul, and Enginee…",
        "url": "https://tim.blog/2024/04/23/10th-anniversary-random-show/",
        "urlToImage": "https://149346886.v2.pressablecdn.com/wp-content/uploads/2024/04/The-Random-Show-10-Year-Anniversary-Illustration-scaled.jpg",
        "publishedAt": "2024-04-23T07:54:11Z",
        "content": "Illustration via 99designs\r\nWelcome to another episode of The Tim Ferriss Show, where it is usually my job to sit down with world-class performers of all different types to tease out the habits, rout… [+11658 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "kottke.org"
        },
        "author": "Jason Kottke",
        "title": "TIL that some tiny bits of bitcoins are more valuable than others....",
        "description": "TIL that some tiny bits of bitcoins are more valuable than others. “Those produced in the year bitcoin was created are consi",
        "url": "https://kottke.org/24/05/0044623-til-that-some-tiny-bits",
        "urlToImage": "",
        "publishedAt": "2024-05-15T16:27:18Z",
        "content": "×Hello! In order to leave a comment, you need to be a current kottke.org member. If you'd like to sign up for a membership to support the site and join the conversation, you can explore your options … [+394 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Quartz India"
        },
        "author": "Vinamrata Chaturvedi",
        "title": "Bitcoin recovers to $64,000 as spot Bitcoin ETFs make a comeback",
        "description": "Bitcoin rebounded to $64,000 on Monday morning after experiencing a significant decline last week. The latest surge in Bitcoin price comes amid the resurgence of spot Bitcoin ETFs.Read more...",
        "url": "https://qz.com/bitcoin-jumps-to-64-000-as-spot-bitcoin-etfs-rebound-1851457837",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/ac5df5d52f89f7e277698fed171e91e6.jpg",
        "publishedAt": "2024-05-06T14:18:00Z",
        "content": "Bitcoin rebounded to $64,000 on Monday morning after experiencing a significant decline last week. The latest surge in Bitcoin price comes amid the resurgence of spot Bitcoin ETFs.\r\nGrayscales Bitcoi… [+1560 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Presse-citron"
        },
        "author": "Romain Vitt",
        "title": "“Buy Bitcoin” : la folle histoire d’un petit bout de papier jaune vendu 1 million de dollars",
        "description": "Golden ticket.",
        "url": "https://www.presse-citron.net/buy-bitcoin-la-folle-histoire-dun-petit-bout-de-papier-jaune-vendu-1-million-de-dollars/",
        "urlToImage": "https://www.presse-citron.net/app/uploads/2024/04/papier-jaune-bitcoin.jpg",
        "publishedAt": "2024-04-29T08:13:01Z",
        "content": "1 million de dollars le petit bout de papier ! Voilà l’une des anecdotes les plus folles de l’Histoire des cryptomonnaies. Tout commence par un événement assez banal : un bloc-notes jaune, vendu sur … [+2289 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Petar Jovanović",
        "title": "‘99Bitcoins’ Launches Anticipated Crypto Presale, Raising Over $1 Million",
        "description": "99Bitcoins has officially launched the presale of their 99BTC token on April 10th. In just around 4 weeks, the presale… Continue reading ‘99Bitcoins’ Launches Anticipated Crypto Presale, Raising Over $1 Million\nThe post ‘99Bitcoins’ Launches Anticipated Crypt…",
        "url": "https://readwrite.com/99bitcoins-launches-anticipated-crypto-presale-raising-over-1-million/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/04/99bitcoins-.png",
        "publishedAt": "2024-05-06T12:31:55Z",
        "content": "99Bitcoins has officially launched the presale of their 99BTC token on April 10th. In just around 4 weeks, the presale raised over $1 million and the token is already being advertised on a multitude … [+3462 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Graeme Hanna",
        "title": "Jack Dorsey on Elon Musk’s X revamp and why he was right about Twitter",
        "description": "Jack Dorsey has insisted the course of action taken by Elon Musk on X has been necessary in the pursuit… Continue reading Jack Dorsey on Elon Musk’s X revamp and why he was right about Twitter\nThe post Jack Dorsey on Elon Musk’s X revamp and why he was right …",
        "url": "https://readwrite.com/jack-dorsey-on-elon-musks-x-revamp-and-why-he-was-right-about-twitter/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/Untitled-design-1.jpg",
        "publishedAt": "2024-05-10T10:35:27Z",
        "content": "Jack Dorsey has insisted the course of action taken by Elon Musk on X has been necessary in the pursuit of free speech.\r\nIn a wide-ranging interview with Pirate Wires, the man who co-founded Twitter … [+2503 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "MarketWatch"
        },
        "author": "Victor Reklaitis",
        "title": "Crypto industry’s lobbying hit a record in 2023 — and is off to a strong start in 2024",
        "description": "The cryptocurrency industry’s spending on Washington lobbying rose to a fresh record last year, while it’s started out 2024 with more sizable spending to influence the U.S. government.",
        "url": "https://www.marketwatch.com/story/crypto-industrys-lobbying-hit-a-record-in-2023-and-is-off-to-a-strong-start-in-2024-fa740b43",
        "urlToImage": "https://images.mktw.net/im-61553693/social",
        "publishedAt": "2024-05-10T12:00:00Z",
        "content": "The cryptocurrency industrys spending on Washington lobbying rose to a fresh record again last year with companies and trade associations shelling out nearly $25 million, beating 2022s total of more … [+2801 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Korben.info"
        },
        "author": "Korben",
        "title": "Edward Snowden lance un dernier avertissement sur la confidentialité du Bitcoin",
        "description": "Edward Snowden alerte sur les risques pour la confidentialité de Bitcoin. Les autorités américaines intensifient leur offensive contre les outils de protection de la vie privée. Des entreprises comme Wasabi Wallet et Trezor ont dû restreindre leurs services a…",
        "url": "https://korben.info/bitcoin-edward-snowden-avertissement-confidentialite.html",
        "urlToImage": "https://korben.info/app/uploads/2024/05/manu23_Edward_Snowden__Bitcoin_privacy_press_drawing_9246c265-3830-4f01-b45e-2891354dde91.webp",
        "publishedAt": "2024-05-03T12:00:54Z",
        "content": "Le célèbre lanceur d’alerte Edward Snowden vient de tirer la sonnette d’alarme sur Twitter. Selon lui, les développeurs de Bitcoin ont intérêt à se bouger les fesses pour intégrer des fonctionnalités… [+3673 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Quartz India"
        },
        "author": "Vinamrata Chaturvedi",
        "title": "Bitcoin is on a rollercoaster ride with the big 'halving' on the horizon",
        "description": "Bitcoin is going through a topsy-turvy phase as Bitcoin halving is on the horizon. The top cryptocurrency jumped yesterday after learning that Hong Kong had approved spot Bitcoin ETFs, but it fell again soon after. The cryptocurrency continued its decline on …",
        "url": "https://qz.com/bitcoin-down-bitcoin-halving-spot-bitcoin-etfs-1851413023",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/b6dce64be3a54a1691c876c82eeacc86.jpg",
        "publishedAt": "2024-04-16T15:07:00Z",
        "content": "Bitcoin is going through a topsy-turvy phase as Bitcoin halving is on the horizon. The top cryptocurrency jumped yesterday after learning that Hong Kong had approved spot Bitcoin ETFs, but it fell ag… [+1807 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Slashdot.org"
        },
        "author": "BeauHD",
        "title": "FTX Customers Poised to Recover All Funds Lost in Collapse",
        "description": "Lawyers for the defunct cryptocurrency exchange FTX said customers would receive all the money they lost when the firm collapsed in 2022 and receive interest on top of it. \"But the recoveries come with a caveat,\" reports the New York Times. \"The amount owed t…",
        "url": "https://news.slashdot.org/story/24/05/08/0622219/ftx-customers-poised-to-recover-all-funds-lost-in-collapse",
        "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
        "publishedAt": "2024-05-08T06:25:00Z",
        "content": "Sign up for the Slashdot newsletter! OR check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your … [+268 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Quartz India"
        },
        "author": "Vinamrata Chaturvedi",
        "title": "5 cryptocurrencies to watch as the big Bitcoin 'halving' begins",
        "description": "Bitcoin will go through it’s latest so-called “halving” event starting Friday. The halving will cut the current reward for mining new coins from 6.25 Bitcoin to 3.125. Halving is an integral part of the Bitcoin blockchain system, which creates a monetary syst…",
        "url": "https://qz.com/bitcoin-halving-dogecoin-ether-solana-litecoin-1851420088",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/1e76bb26709781d483b3b077a5642584.jpg",
        "publishedAt": "2024-04-18T19:07:00Z",
        "content": "Bitcoin Cash was created in 2017 after the Bitcoin hard fork. A hard fork is a phenomenon in the blockchain world that happens when the community makes major changes to the blockchain network and cha… [+528 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Quartz India"
        },
        "author": "Vinamrata Chaturvedi",
        "title": "Bitcoin has fallen to $61,000 as Hong Kong crypto ETFs fail to impress investors",
        "description": "Bitcoin continued to shed its value as Hong Kong’s Bitcoin and Ether ETFs failed to impress investors on their debut. Recently, six crypto-related ETFs were listed on the Hong Kong exchange. Bitcoin ETFs contributed $8.5 million in volume, while Ether ETFs br…",
        "url": "https://qz.com/bitcoin-price-drop-hong-kong-etfs-1851445420",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/05362ce427a9371e86cd9ce21e79cd56.jpg",
        "publishedAt": "2024-04-30T14:18:00Z",
        "content": "Bitcoin continued to shed its value as Hong Kongs Bitcoin and Ether ETFs failed to impress investors on their debut. Recently, six crypto-related ETFs were listed on the Hong Kong exchange. Bitcoin E… [+1292 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Xataka.com"
        },
        "author": "Javier Pastor",
        "title": "La IA tiene una sed insaciable de energía: en 2030 consumirá tanto como India, afirman en ARM",
        "description": "Nos encanta usar herramientas como ChatGPT o Midjourney, pero hace ya tiempo que sabemos que hacerlo no sale en absoluto gratis. La capacidad de cálculo necesaria para responder a nuestras peticiones es enorme, y también lo es la cantidad de energía (y agua) …",
        "url": "https://www.xataka.com/robotica-e-ia/ia-tiene-sed-insaciable-energia-2030-consumira-como-india-afirman-arm",
        "urlToImage": "https://i.blogs.es/f7904e/energia2/840_560.jpeg",
        "publishedAt": "2024-04-18T11:30:48Z",
        "content": "Nos encanta usar herramientas como ChatGPT o Midjourney, pero hace ya tiempo que sabemos que hacerlo no sale en absoluto gratis. La capacidad de cálculo necesaria para responder a nuestras peticiones… [+4025 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Xataka.com"
        },
        "author": "Javier Marquez",
        "title": "El fundador de Binance es multimillonario. Y es posible que su riqueza aumente aún más tras cumplir su condena en prisión",
        "description": "Changpeng Zhao, también conocido como “CZ”, se convertirá en la persona más rica en ir a la cárcel en Estados Unidos. El fundador de Binance, que según el índice de multimillonarios de Bloomberg tiene un patrimonio de unos 40.000 millones de dólares, podría e…",
        "url": "https://www.xataka.com/criptomonedas/fundador-binance-multimillonario-posible-que-su-riqueza-aumente-cumplir-su-condena-prision",
        "urlToImage": "https://i.blogs.es/a2113c/binance-fundador-millonario-portada/840_560.jpeg",
        "publishedAt": "2024-05-02T23:55:49Z",
        "content": "Changpeng Zhao, también conocido como CZ, se convertirá en la persona más rica en ir a la cárcel en Estados Unidos. El fundador de Binance, que según el índice de multimillonarios de Bloomberg tiene … [+2600 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Quartz India"
        },
        "author": "Quartz Bot",
        "title": "Bitcoin whales, Robinhood vs. the SEC, Nvidia and Apple vs. McDonald's and Starbucks: Markets news roundup",
        "description": "Those who own at least 1,000 Bitcoin, whether they are individuals or corporations, are referred to as Bitcoin Whales. Most do not disclose how many coins they own, but a select few have come forward.Read more...",
        "url": "https://qz.com/bitcoin-whales-robinhood-sec-nvidia-apple-stock-1851469617",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/55133426e34f97de20fcd48c0cf9873c.jpg",
        "publishedAt": "2024-05-11T13:00:00Z",
        "content": "Those who own at least 1,000 Bitcoin, whether they are individuals or corporations, are referred to as Bitcoin Whales. Most do not disclose how many coins they own, but a select few have come forward… [+11 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Quartz India"
        },
        "author": "Vinamrata Chaturvedi",
        "title": "MicroStrategy, Coinbase, and other crypto stocks jump after the Bitcoin 'halving'",
        "description": "Cryptocurrency-related stocks surged on Monday afternoon after Bitcoin underwent a successful “halving” over the weekend. As of right now, Bitcoin is trading at a solid $66,000, following the modest rise it experienced post-halving.Read more...",
        "url": "https://qz.com/microstartegy-coinbase-jump-after-bitcoin-halving-1851426739",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/1734d62aeed19bbaecc24a33e497c045.jpg",
        "publishedAt": "2024-04-22T17:49:00Z",
        "content": "Cryptocurrency-related stocks surged on Monday afternoon after Bitcoin underwent a successful halving over the weekend. As of right now, Bitcoin is trading at a solid $66,000, following the modest ri… [+1510 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Presse-citron"
        },
        "author": "Camille Coirault",
        "title": "Impôts 2024 : comment déclarer vos bitcoins et cryptomonnaies et que risquez-vous si vous ne le faites pas ?",
        "description": "Le bitcoin franchit des sommets inédits alors que la déclaration 2024 des revenus approche à grands pas. Voici comment ne pas se faire taper sur les doigts par l'administration.",
        "url": "https://www.presse-citron.net/impots-2024-comment-declarer-vos-bitcoins-et-cryptomonnaies-et-que-risquez-vous-si-vous-ne-le-faites-pas/",
        "urlToImage": "https://www.presse-citron.net/app/uploads/2024/04/bitcoin.jpg",
        "publishedAt": "2024-04-17T07:32:35Z",
        "content": "Pour les investisseurs en cryptomonnaies, le mois de mars a été un splendide tournant puisque le bitcoin a franchi la barre des 72 000 dollars. Une très bonne nouvelle après la dégringolade du mois d… [+2818 chars]"
      }
    ]


    constructor(){
        super()
        
        this.state=
        {
            articles:this.articles
        }
    }


    async componentDidMount()
    {
      console.log('whass');
    }


  render() {
    return (

<div className='container my-3'>
      <div className='row'>

        {this.state.articles.map((element)=>{

return<div className='col-sm-4'> 
<Cards title={element.title} description={element.description}imageurl={element.urlToImage} explore={element.url} ></Cards>
</div>


        })}

      </div>

</div>

    )
  }
}
