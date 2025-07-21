import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

const TradeGPT = () => {
  const [inputText, setInputText] = useState("");
  const [ticker, setTicker] = useState("COIN");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputFocused, setInputFocused] = useState(false);
  const messagesEndRef = useRef(null);

  // const extractTickers = (text) => {
  //   const matches = text.match(/\b[A-Z]{2,5}\b/g);
  //   return matches || [];
  // };

  const extractEntities = (text) => {
    const knownCurrencies = [
      "USD",
      "EUR",
      "JPY",
      "GBP",
      "AUD",
      "CAD",
      "CHF",
      "NZD",
    ];

    const tickerMap = {
      appl: "AAPL",
      apple: "AAPL",
      amazon: "AMZN",
      amzn: "AMZN",
      tesla: "TSLA",
      tsla: "TSLA",
      netflix: "NFLX",
      nflx: "NFLX",
      microsoft: "MSFT",
      msft: "MSFT",
      google: "GOOGL",
      googl: "GOOGL",
      alphabet: "GOOGL",
      meta: "META",
      facebook: "META",
      nvidia: "NVDA",
      nvda: "NVDA",
      coinbase: "COIN",
      coin: "COIN",
      intel: "INTC",
      amd: "AMD",
      qualcomm: "QCOM",
      qcom: "QCOM",
      cisco: "CSCO",
      csco: "CSCO",
      oracle: "ORCL",
      orcl: "ORCL",
      ibm: "IBM",
      paypal: "PYPL",
      pypl: "PYPL",
      uber: "UBER",
      lyft: "LYFT",
      airbnb: "ABNB",
      shopify: "SHOP",
      snap: "SNAP",
      snapchat: "SNAP",
      zoom: "ZM",
      zillow: "ZG",
      roku: "ROKU",
      datadog: "DDOG",
      snowflake: "SNOW",
      palantir: "PLTR",
      pltr: "PLTR",
      twilio: "TWLO",
      twlo: "TWLO",
      square: "SQ",
      block: "SQ",
      spotify: "SPOT",
      spce: "SPCE",
      rivian: "RIVN",
      lucid: "LCID",
      chewy: "CHWY",
      etsy: "ETSY",
      pins: "PINS",
      adobe: "ADBE",
      adbe: "ADBE",
      autodesk: "ADSK",
      adsk: "ADSK",
      atlassian: "TEAM",
      team: "TEAM",
      salesforce: "CRM",
      crm: "CRM",
      slack: "WORK",
      ford: "F",
      gm: "GM",
      boeing: "BA",
      ba: "BA",
      lockheed: "LMT",
      raytheon: "RTX",
      northrop: "NOC",
      exxon: "XOM",
      chevron: "CVX",
      shell: "SHEL",
      bp: "BP",
      conocophillips: "COP",
      phillips: "PSX",
      pfizer: "PFE",
      moderna: "MRNA",
      jnj: "JNJ",
      johnson: "JNJ",
      unitedhealth: "UNH",
      unh: "UNH",
      merck: "MRK",
      abbvie: "ABBV",
      walmart: "WMT",
      costco: "COST",
      target: "TGT",
      lowe: "LOW",
      nike: "NKE",
      mcdonald: "MCD",
      burger: "QSR",
      coca: "KO",
      pepsi: "PEP",
      starbucks: "SBUX",
      sbux: "SBUX",
      chipotle: "CMG",
      dis: "DIS",
      disney: "DIS",
      warner: "WBD",
      paramount: "PARA",
      vz: "VZ",
      verizon: "VZ",
      tmus: "TMUS",
      tmobile: "TMUS",
      att: "T",
      comcast: "CMCSA",
      lumn: "LUMN",
      aal: "AAL",
      delta: "DAL",
      ual: "UAL",
      jetblue: "JBLU",
      alaska: "ALK",
      spirit: "SAVE",
      fedex: "FDX",
      ups: "UPS",
      lucidmotors: "LCID",
      rivianauto: "RIVN",
      carvana: "CVNA",
      carmax: "KMX",
      autonation: "AN",
      manheim: "KAR",
      gmfinancial: "GM",
      applied: "AMAT",
      amat: "AMAT",
      zoominfo: "ZI",
      zi: "ZI",
      roblox: "RBLX",
      rblx: "RBLX",
      unity: "U",
      unitysoft: "U",
      doordash: "DASH",
      dash: "DASH",
      draftkings: "DKNG",
      dkng: "DKNG",
      tripadvisor: "TRIP",
      trip: "TRIP",
      matchgroup: "MTCH",
      mtch: "MTCH",
      affirm: "AFRM",
      afrm: "AFRM",
      etrade: "ETFC",
      etfc: "ETFC",
      robinhood: "HOOD",
      hood: "HOOD",
      blackrock: "BLK",
      blk: "BLK",
      goldman: "GS",
      gs: "GS",
      morgan: "MS",
      ms: "MS",
      jpmorgan: "JPM",
      jpm: "JPM",
      wells: "WFC",
      wfc: "WFC",
      bankofamerica: "BAC",
      bac: "BAC",
      citigroup: "C",
      c: "C",
      barclays: "BCS",
      bcs: "BCS",
      vale: "VALE",
      "vale s.a.": "VALE",
      run: "RUN",
      sunrun: "RUN",
      wolf: "WOLF",
      wolfspeed: "WOLF",
      csx: "CSX",
      kmi: "KMI",
      kinder: "KMI",
      t: "T",
      "at&t": "T",
      rcat: "RCAT",
      redcat: "RCAT",
      ccl: "CCL",
      carnival: "CCL",
      usb: "USB",
      usbank: "USB",
      aedaud: "AED/AUD",
      aedcad: "AED/CAD",
      aedusd: "AED/USD",
      aedjpy: "AED/JPY",
      aedinr: "AED/INR",
      aedeur: "AED/EUR",
      audusd: "AUD/USD",
      audjpy: "AUD/JPY",
      audcad: "AUD/CAD",
      audinr: "AUD/INR",
      audcny: "AUD/CNY",
      audnzd: "AUD/NZD",
    };

    const upperText = text.toUpperCase();
    const lowerText = text.toLowerCase();

    const forexMatches = [];
    const forexRegex = /\b([A-Z]{3})[\/\-]([A-Z]{3})\b/g;
    let match;
    while ((match = forexRegex.exec(upperText)) !== null) {
      if (
        knownCurrencies.includes(match[1]) &&
        knownCurrencies.includes(match[2])
      ) {
        forexMatches.push(`${match[1]}/${match[2]}`);
      }
    }

    const words = lowerText.split(/\s+/);
    const tickers = words
      .map((w) => tickerMap[w])
      .filter((t) => t && !forexMatches.some((pair) => pair.includes(t)));

    return {
      tickers: [...new Set(tickers)],
      forexPairs: [...new Set(forexMatches)],
    };
  };

  // const fetchAlphaVantageData = async (ticker) => {
  //   const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=5min&apikey=04RGF1U9PAJ49VYI`;
  //   const res = await fetch(url);
  //   const data = await res.json();

  //   const timeSeries = data["Time Series (5min)"];
  //   if (timeSeries) {
  //     const labels = Object.keys(timeSeries).slice(0, 10).reverse(); // 10 recent points
  //     const prices = labels.map((time) =>
  //       parseFloat(timeSeries[time]["4. close"])
  //     );

  //     const chartConfig = {
  //       type: "line",
  //       data: {
  //         labels,
  //         datasets: [
  //           {
  //             label: `${ticker} Price (5min)`,
  //             data: prices,
  //             fill: false,
  //             borderColor: "green",
  //             tension: 0.1,
  //           },
  //         ],
  //       },
  //       options: {
  //         plugins: {
  //           legend: { display: false },
  //         },
  //         scales: {
  //           x: { ticks: { maxTicksLimit: 5 } },
  //         },
  //       },
  //     };

  //     const encodedChart = encodeURIComponent(JSON.stringify(chartConfig));
  //     const chartUrl = `https://quickchart.io/chart?c=${encodedChart}`;

  //     const latestTime = labels[labels.length - 1];
  //     const price = prices[prices.length - 1];

  //     return { source: "AlphaVantage", ticker, price, latestTime, chartUrl };
  //   }

  //   return null;
  // };

  // const fetchFinnhubData = async (ticker) => {
  //   const url = `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=d08gifhr01qh1ecc2v7gd08gifhr01qh1ecc2v80`;
  //   const res = await fetch(url);
  //   const data = await res.json();

  //   if (data.c) {
  //     return {
  //       source: "Finnhub",
  //       ticker,
  //       current: data.c,
  //       high: data.h,
  //       low: data.l,
  //       open: data.o,
  //       previousClose: data.pc,
  //     };
  //   }
  //   return null;
  // };

  const fetchAlphaVantageData = async (ticker) => {
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=5min&apikey=04RGF1U9PAJ49VYI`;
    const res = await fetch(url);
    const data = await res.json();

    const timeSeries = data["Time Series (5min)"];
    if (timeSeries) {
      const labels = Object.keys(timeSeries).slice(0, 10).reverse();
      const prices = labels.map((time) =>
        parseFloat(timeSeries[time]["4. close"])
      );

      const chartConfig = {
        type: "line",
        data: {
          labels,
          datasets: [
            {
              label: `${ticker} Price (5min)`,
              data: prices,
              fill: false,
              borderColor: "green",
              tension: 0.1,
            },
          ],
        },
        options: {
          plugins: {
            legend: { display: false },
          },
          scales: {
            x: { ticks: { maxTicksLimit: 5 } },
          },
        },
      };

      const encodedChart = encodeURIComponent(JSON.stringify(chartConfig));
      const chartUrl = `https://quickchart.io/chart?c=${encodedChart}`;

      const latestTime = labels[labels.length - 1];
      const price = prices[prices.length - 1];

      return { source: "AlphaVantage", ticker, price, latestTime, chartUrl };
    }

    return null;
  };

  const fetchFinnhubData = async (ticker) => {
    const url = `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=d08gifhr01qh1ecc2v7gd08gifhr01qh1ecc2v80`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.c) {
      return {
        source: "Finnhub",
        ticker,
        current: data.c,
        high: data.h,
        low: data.l,
        open: data.o,
        previousClose: data.pc,
      };
    }
    return null;
  };

  // const streamChatResponse = async (userMessage, realTimeData) => {
  //   const systemPrompt = `You are TradeGPT, a professional market analyst. Use the real-time market data provided to analyze and respond clearly and professionally with trading insights. Summarize price action, trends, and provide possible interpretations.`;

  //   const res = await fetch("https://api.deepseek.com/chat/completions", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer sk-fd092005f2f446d78dade7662a13c896", // your working DeepSeek key
  //     },
  //     body: JSON.stringify({
  //       model: "deepseek-chat",
  //       messages: [
  //         {
  //           role: "system",
  //           content: systemPrompt,
  //         },
  //         {
  //           role: "user",
  //           content: `${userMessage}\n\nReal-Time Market Data:\n${JSON.stringify(
  //             realTimeData,
  //             null,
  //             2
  //           )}`,
  //         },
  //       ],
  //     }),
  //   });

  //   const json = await res.json();
  //   return json.choices?.[0]?.message?.content || "No response from AI.";
  // };

  const streamChatResponse = async (userMessage, realTimeData) => {
    const systemPrompt = `You are TradeGPT — an intelligent, professional yet approachable trading assistant, built to help with anything finance, investing, or trading-related.

You support a wide range of queries, including:

📊 **Market Analysis**
- Breakdowns of stocks, crypto, forex, ETFs using fundamentals and technicals.
- Use clear sections like Summary, Momentum, Key Levels, and Trade Plan.
- Include live data (if provided), trend direction, and upcoming catalysts.

💡 **Trade Ideas**
- Generate long/short setups for stocks, options, or forex.
- Include entry, stop-loss, targets, risk/reward, and rationale.
- Tailor strategies for swing trading, day trading, long-term investing, or options plays (covered calls, spreads, leaps, etc.).

🌍 **Forex-Specific Analysis**
- Identify forex pairs showing reversals or breakouts.
- Analyze gold (XAUUSD) on multiple timeframes (Daily + 4H).
- Spot pairs that broke previous daily high/lows.
- Generate intraday trade ideas for pairs like EUR/USD or USD/JPY.
- Use real technicals: RSI, MACD, S/R levels, candlesticks, sentiment.
- Include news-driven catalysts (e.g., CPI, Fed, BoE).
- Be structured with: Pair, Signal, Setup, Risk, Reasoning.
- Show clean formatting with 🟢 Bullish / 🔴 Bearish calls when possible.

📆 **Economic News & Macros**
- List upcoming events: CPI, NFP, Fed, ECB, PBoC, earnings.
- Rate impact: High/Medium/Low.
- Summarize how these events may affect USD, EUR, commodities, indices.
- Be clear on timing and risk to markets.

📚 **Concepts & Education**
- Explain financial concepts in simple terms: e.g., "What is the Put/Call Ratio?", "What does RSI mean?", "What is IV Crush?"
- Use analogies and examples when needed. Make it beginner-friendly but smart.

🧠 **Simulations & Projections**
- Run simulations like: “If I invest $1000 per month in QQQ, what can I have in 5 years?”
- Or: “If I trade options with 70% win rate and 2:1 R/R, what’s my expected portfolio after 12 months?”
- Be realistic. Include assumptions, show step-by-step reasoning, and give numbers.

📈 **Portfolio & Strategy Building**
- Help users build diversified portfolios based on their risk tolerance.
- Recommend ETFs, growth stocks, dividend ideas, hedging techniques.
- Provide allocation suggestions (e.g. 60/30/10 stock/bond/cash).

🤝 **Conversational Support**
- Respond casually if user says "hey", "what’s up?", etc.
- Be warm, friendly, engaging — like a smart trading friend.
- Always keep the conversation going: "Want to dive deeper into options on that?", "Should we run a backtest next?"

📍 **Formatting Guidelines**
- Use clean markdown-style formatting: bullet points, headers, emojis when helpful.
- Avoid placeholders like $XXX — always use real values or estimates if data is available.
- End every response with a helpful follow-up.

🧩 **Examples of Queries You Support**
- “Identify 3 forex pairs showing reversal signs”
- “Analyse XAUUSD on Daily and 4H”
- “Which pairs broke above their daily highs?”
- “Give intraday trade idea for EURUSD”
- “Any economic news that may affect markets today?”
- “What’s the best call option for AAPL this week?”
- “Compare Apple vs Google as long-term picks”
- “What is RSI and how to use it?”

🎯 **Tone**
- Friendly, sharp, and intelligent.
- No fluff, but approachable.
- Adjust depth based on user signals (beginner vs. advanced).

---

🔔 *For personalized guidance or a deeper portfolio review, you can always connect with a [Valour Wealth Analyst](https://valourwealth.com).*
`;

    //  `You are TradeGPT, a professional market analyst. Use the real-time market data provided to analyze and respond clearly and professionally with trading insights. Summarize price action, trends, and provide possible interpretations.`;

    const res = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer sk-fd092005f2f446d78dade7662a13c896",
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          { role: "system", content: systemPrompt },
          {
            role: "user",
            content: `${userMessage}\n\nReal-Time Market Data:\n${JSON.stringify(
              realTimeData,
              null,
              2
            )}`,
          },
        ],
      }),
    });

    const json = await res.json();
    return json.choices?.[0]?.message?.content || "No response from AI.";
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const renderFormattedText = (text) => {
    const lines = text.split("\n");

    return lines.map((line, index) => {
      const trimmed = line.trim();

      if (trimmed === "" || trimmed === "---") {
        return <div key={index} className="h-4" />;
      }

      if (trimmed.startsWith("# ")) {
        return null;
      }

      if (trimmed.startsWith("###")) {
        const title = trimmed
          .replace(/^###\s*\*\*(.*?)\*\*/, "$1")
          .replace(/^###\s*/, "")
          .replace(/\*\*/g, "");
        return (
          <h3 key={index} className="text-lg font-bold text-white mb-3 mt-4">
            {title}
          </h3>
        );
      }

      if (trimmed.startsWith("##")) {
        const title = trimmed
          .replace(/^##\s*\*\*(.*?)\*\*/, "$1")
          .replace(/^##\s*/, "")
          .replace(/\*\*/g, "");
        if (title.toLowerCase() === "entry levels") return null;

        return (
          <h2 key={index} className="text-xl font-bold text-white mb-3 mt-5">
            {title}
          </h2>
        );
      }

      if (/^\d+\.\s/.test(trimmed)) {
        const num = trimmed.match(/^(\d+)\./)?.[1] || "";
        const content = trimmed
          .replace(/^\d+\.\s/, "")
          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
        return (
          <div key={index} className="mb-2">
            <div className="flex items-start gap-2">
              <span className="text-white font-bold mt-1 text-sm">{num}.</span>
              <div
                className="text-gray-100 flex-1"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </div>
        );
      }

      if (/^[-*]\s/.test(trimmed)) {
        const content = trimmed
          .replace(/^[-*]\s*/, "")
          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
        return (
          <div key={index} className="mb-2 ml-4">
            <div className="flex items-start gap-2">
              <span className="text-white mt-1 text-sm">•</span>
              <div
                className="text-gray-100 flex-1"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </div>
        );
      }

      const formatted = trimmed.replace(
        /\*\*(.*?)\*\*/g,
        "<strong>$1</strong>"
      );
      return (
        <div
          key={index}
          className="text-gray-200 mb-2"
          dangerouslySetInnerHTML={{ __html: formatted }}
        />
      );
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isAnalyzing]);

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
    setMessages([]);
    setInputText("");
    setIsAnalyzing(false);
  };

  const prompts = [
    {
      title: "When is",
      subtitle: `${ticker}'s upcoming earnings?`,
      prompt: `When is ${ticker}'s next earnings date? Please provide the exact date if available and any relevant details about the upcoming earnings report.`,
    },
    {
      title: "Give me the earning date",
      subtitle: `for ${ticker}`,
      prompt: `What is the next earnings date for ${ticker}? Please provide the exact date if available and any relevant details about the upcoming earnings report.`,
    },
    {
      title: "Recent news",
      subtitle: `related to ${ticker}`,
      prompt: `Find and summarize the most recent news related to ${ticker} stock. Focus on news that could impact the stock price and trading decisions.`,
    },
    {
      title: "Summarize",
      subtitle: `the latest SEC filing for ${ticker}`,
      prompt: `Summarize the most recent SEC filing for ${ticker}. Focus on key financial information, important disclosures, and any material changes that could impact investors.`,
    },
  ];

  const mockResponses = {
    earnings: `Based on my analysis, ${ticker}'s next earnings date is expected to be announced in approximately 2-3 weeks. Here are the key details:

📅 *Expected Earnings Date*: Q4 2024 results likely in early February 2025
📊 *Previous Quarter Performance*: Strong revenue growth of 15% YoY
🎯 *Analyst Expectations*: EPS estimate of $2.45-$2.65
📈 *Key Metrics to Watch*: Trading volume, institutional holdings, and cryptocurrency market trends

I recommend monitoring their investor relations page for the official announcement.`,

    news: `Here's a summary of recent news affecting ${ticker}:

🔥 *Latest Headlines*:
• SEC approval for new cryptocurrency products
• Partnership announcement with major financial institutions  
• Increased institutional adoption driving trading volumes
• Recent regulatory clarity boosting investor confidence

📈 *Market Impact*: Generally positive sentiment with 12% price increase over the past month. Analysts are optimistic about Q4 performance.

⚠ *Risk Factors*: Regulatory changes and crypto market volatility remain key concerns for investors.`,

    sec: `Latest SEC filing summary for ${ticker}:

📋 *Filing Type*: 10-Q (Quarterly Report)
📅 *Filing Date*: December 15, 2024

🔍 *Key Highlights*:
• Revenue: $1.2B (+18% QoQ)
• Net Income: $125M (+45% YoY)  
• Cash Position: $5.8B (strong liquidity)
• Trading Volume: Record high of $85B

💼 *Management Notes*:
- Continued expansion in institutional services
- Investment in technology infrastructure
- Focus on regulatory compliance

⚡ *Material Changes*: New derivative products launch and expansion into European markets announced.`,

    default: `Thank you for your question about ${ticker}. Based on current market data and analysis:

📊 *Current Status*: ${ticker} is showing strong fundamentals with positive momentum in the cryptocurrency trading sector.

🎯 *Key Points*:
• Strong institutional adoption
• Robust trading infrastructure  
• Diversified revenue streams
• Regulatory compliance focus

📈 *Outlook*: Positive long-term prospects supported by growing crypto adoption and institutional interest.

Would you like me to analyze any specific aspect in more detail?`,
  };

  const generateMockResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    if (message.includes("earning") || message.includes("date")) {
      return mockResponses.earnings;
    } else if (message.includes("news") || message.includes("recent")) {
      return mockResponses.news;
    } else if (
      message.includes("sec") ||
      message.includes("filing") ||
      message.includes("summarize")
    ) {
      return mockResponses.sec;
    } else {
      return mockResponses.default;
    }
  };

  const handlePromptClick = (prompt) => {
    setInputText(prompt);
  };

  const handleTickerChange = (e) => {
    setTicker(e.target.value.toUpperCase());
  };

  const fetchForexRate = async (pair) => {
    const [from, to] = pair.split("/");

    const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${from}&to_currency=${to}&apikey=04RGF1U9PAJ49VYI`;
    const res = await fetch(url);
    const data = await res.json();

    const rateData = data["Realtime Currency Exchange Rate"];
    if (rateData) {
      return {
        pair,
        exchangeRate: rateData["5. Exchange Rate"],
        bidPrice: rateData["8. Bid Price"],
        askPrice: rateData["9. Ask Price"],
      };
    }

    return null;
  };

  // const handleSendMessage = async () => {
  //   if (!inputText.trim()) return;

  //   const userMessage = inputText;
  //   setMessages((prev) => [...prev, { type: "user", content: userMessage }]);
  //   setInputText("");
  //   setIsAnalyzing(true);

  //   try {
  //     // let tickers = extractTickers(userMessage);
  //     let { forexPairs, tickers } = extractEntities(userMessage);

  //     if (tickers.length === 0) tickers = [ticker];

  //     let realTimeData = [];

  //     for (const tkr of tickers) {
  //       const [alphaData, finnhubData] = await Promise.all([
  //         fetchAlphaVantageData(tkr),
  //         fetchFinnhubData(tkr),
  //       ]);
  //       if (alphaData) realTimeData.push(alphaData);
  //       if (finnhubData) realTimeData.push(finnhubData);
  //     }

  //     const reply = await streamChatResponse(userMessage, realTimeData);

  //     const assistantMessage = { type: "assistant", content: reply };
  //     const chartImageMessage = realTimeData.find((d) => d.chartUrl)
  //       ? { type: "image", url: realTimeData.find((d) => d.chartUrl).chartUrl }
  //       : null;

  //     setMessages((prev) => [
  //       ...prev,
  //       assistantMessage,
  //       ...(chartImageMessage ? [chartImageMessage] : []),
  //     ]);
  //   } catch (err) {
  //     console.error("Chat error:", err);
  //     setMessages((prev) => [
  //       ...prev,
  //       {
  //         type: "assistant",
  //         content: "⚠️ Error fetching market data or generating a response.",
  //       },
  //     ]);
  //   } finally {
  //     setIsAnalyzing(false);
  //   }
  // };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = inputText;
    setMessages((prev) => [...prev, { type: "user", content: userMessage }]);
    setInputText("");
    setIsAnalyzing(true);

    try {
      let { forexPairs, tickers } = extractEntities(userMessage);
      let realTimeData = [];

      // Handle Forex Pairs if mentioned
      if (forexPairs.length > 0) {
        for (const pair of forexPairs) {
          const fxData = await fetchForexRate(pair);
          if (fxData) realTimeData.push(fxData);
        }
      } else {
        if (tickers.length === 0) tickers = [ticker];
        for (const tkr of tickers) {
          const [alphaData, finnhubData] = await Promise.all([
            fetchAlphaVantageData(tkr),
            fetchFinnhubData(tkr),
          ]);
          if (alphaData) realTimeData.push(alphaData);
          if (finnhubData) realTimeData.push(finnhubData);
        }
      }

      const reply = await streamChatResponse(userMessage, realTimeData);

      const assistantMessage = { type: "assistant", content: reply };
      const chartImageMessage = realTimeData.find((d) => d.chartUrl)
        ? { type: "image", url: realTimeData.find((d) => d.chartUrl).chartUrl }
        : null;

      setMessages((prev) => [
        ...prev,
        assistantMessage,
        ...(chartImageMessage ? [chartImageMessage] : []),
      ]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          type: "assistant",
          content: "⚠️ Error fetching market data or generating a response.",
        },
      ]);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleNewChat = () => {
    setMessages([]);
    setInputText("");
    setTicker("COIN");
    setIsAnalyzing(false);
  };

  return (
    <>
      <style>{`
        /* TradeGPT Styles */
        .tradegpt-wrapper {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
        }

        /* ChatBot Button */
        .chatbot-button {
          
          background: linear-gradient(135deg, #040805 0%, #38a739 100%);
          color: white;
          border: none;
          border-radius: 25px;
          padding: 12px 20px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          position: relative;
        }

        .chatbot-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.3);
        }

        .chatbot-logo {
          width: 20px;
          height: 20px;
        }

        .chatbot-chevron {
          opacity: 0.8;
          transition: transform 0.3s ease;
        }

        .chatbot-chevron.rotated {
          transform: rotate(180deg);
        }

        /* Container */
        .tradegpt-container {
          width: 400px;
          height: 600px;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transform: translateY(0);
          transition: all 0.3s ease;
        }

        /* Header */
        .tradegpt-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .tradegpt-title {
          font-size: 16px;
          font-weight: 600;
        }

        /* Chat Header */
        .chat-header {
          padding: 16px 20px;
          border-bottom: 1px solid #e9ecef;
          background: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .chat-header-title {
          color: #2c3e50;
          font-weight: 600;
          font-size: 16px;
          margin: 0;
        }

        .header-actions {
          display: flex;
          gap: 8px;
        }

        .header-action-btn {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6c757d;
          background: transparent;
          border: none;
          border-radius: 6px;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .header-action-btn:hover {
          background-color: #f8f9fa;
          color: #495057;
        }

        /* Chat Content */
        .chat-content {
          flex: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }

        .chat-messagesbot {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
        }

        .welcome-section {
          padding: 24px 20px 20px 20px;
          text-align: center;
        }

        .welcome-message h2 {
          color: #2c3e50;
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        /* Ticker Input */
        .ticker-input-section {
          margin-bottom: 16px;
        }

        .ticker-input-section label {
          font-weight: 600;
          color: #495057;
          margin-bottom: 8px;
          font-size: 14px;
          display: block;
        }

        .ticker-input {
          width: 100%;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          padding: 12px 16px;
          font-weight: 600;
          text-transform: uppercase;
          font-size: 14px;
          transition: all 0.2s ease;
          background: white;
        }

        .ticker-input:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
          outline: none;
        }

        /* Prompt Suggestions */
        .prompt-suggestions {
          padding: 0 20px;
        }

        .prompts-title {
          color: #4285f4;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .prompt-card {
          background: #ffffff;
          border: 1px solid #e9ecef;
          border-radius: 12px;
          padding: 6px 9px;
          margin-bottom: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .prompt-card:hover {
          background: #f8f9fa;
          border-color: #dee2e6;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .prompt-title {
          font-weight: 600;
          color: #212529;
          margin-bottom: 6px;
          font-size: 12px;
          line-height: 1.3;
        }

        .prompt-subtitle {
          color: #6c757d;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.4;
        }

        /* Messages */
        .message {
          margin-bottom: 16px;
        }

        .message-user {
          text-align: right;
        }

        .message-assistant {
          text-align: left;
        }

        .message-content {
          display: inline-block;
          max-width: 80%;
          padding: 12px 16px;
          border-radius: 18px;
          font-size: 14px;
          line-height: 1.4;
        }

        .message-user .message-content {
          linear-gradient(135deg, #040805 0%, #38a739 100%)
          color: white;
        }

        .message-assistant .message-content {
          background: #f1f3f4;
          color: #333;
          white-space: pre-line;
        }

        .analyzing-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #6c757d;
          font-size: 14px;
          margin-bottom: 16px;
        }

        .analyzing-dots {
          display: flex;
          gap: 4px;
        }

        .analyzing-dot {
          width: 6px;
          height: 6px;
          background: #6c757d;
          border-radius: 50%;
          animation: pulse 1.4s ease-in-out infinite both;
        }

        .analyzing-dot:nth-child(1) { animation-delay: -0.32s; }
        .analyzing-dot:nth-child(2) { animation-delay: -0.16s; }

        @keyframes pulse {
          0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
          40% { transform: scale(1); opacity: 1; }
        }

        /* Input Area */
        .input-area-container {
          background: white;
          border-top: 1px solid #e9ecef;
          padding: 16px 20px;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .chat-input {
          width: 100%;
          border: 2px solid #e9ecef;
          border-radius: 25px;
          padding: 12px 50px 12px 16px;
          font-size: 14px;
          transition: all 0.2s ease;
          background: #f8f9fa;
          resize: none;
          outline: none;
        }

        .chat-input:focus, .chat-input.focused {
          border-color: #000000;
          background: white;
          box-shadow: 0 0 0 1px #000000;
        }

        .chat-input::placeholder {
          color: #adb5bd;
        }

        .send-buttongpt {
          position: absolute;
          right: 4px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #040805 0%, #38a739 100%);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .send-buttongpt svg {
          stroke: white;
        }

        .disclaimer {
          text-align: center;
          color: #6c757d;
          font-size: 12px;
          margin: 8px 0 0 0;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .tradegpt-wrapper {
            position: fixed;
            bottom: 0;
            right: 0;
            left: 0;
            top: 0;
            flex-direction: column;
            justify-content: flex-end;
            align-items: stretch;
            gap: 0;
          }
          
          .chatbot-button {
            margin: 20px;
            align-self: flex-end;
          }
          
          .tradegpt-container {
            width: 100%;
            height: calc(100vh - 80px);
            border-radius: 0;
          }
        }

        /* Scrollbar */
        .chat-messagesbot::-webkit-scrollbar {
          width: 4px;
        }

        .chat-messagesbot::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        .chat-messagesbot::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 4px;
        }
      `}</style>

      <div className="tradegpt-wrapper">
        {/* Chat Interface - Shows above the button when open */}
        {isChatOpen && (
          <div className="tradegpt-container">
            {/* Chat Header */}
            <div className="chat-header">
              <h5 className="chat-header-title">New Chat</h5>
              <div className="header-actions">
                <button className="header-action-btn" onClick={handleCloseChat}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Chat Content */}
            <div className="chat-content">
              {messages.length === 0 ? (
                <>
                  <div className="welcome-section text-black">
                    <h4>How can I help you today?</h4>
                  </div>

                  {/* Prompt Suggestions */}
                  <div className="prompt-suggestions">
                    <h6 className="prompts-title">
                      Get Started with these Prompts
                    </h6>
                    {prompts.map((prompt, index) => (
                      <div
                        key={index}
                        className="prompt-card"
                        onClick={() => handlePromptClick(prompt.prompt)}
                      >
                        <div className="prompt-title">{prompt.title}</div>
                        <div className="prompt-subtitle">{prompt.subtitle}</div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                // <div className="chat-messages">
                //   {messages.map((message, index) => (
                //     <div
                //       key={index}
                //       className={`message message-${message.type}`}
                //     >
                //       <div className="message-content">{message.content}</div>
                //     </div>
                //   ))}

                //   {isAnalyzing && (
                //     <div className="analyzing-indicator">
                //       <span>Analyzing</span>
                //       <div className="analyzing-dots">
                //         <div className="analyzing-dot"></div>
                //         <div className="analyzing-dot"></div>
                //         <div className="analyzing-dot"></div>
                //       </div>
                //     </div>
                //   )}
                //   <div ref={messagesEndRef} />
                // </div>
                <div className="chat-messagesbot">
                  {messages.map((message, index) =>
                    message.type === "image" ? (
                      <div key={index} className="message-assistant">
                        <img
                          src={message.url}
                          alt="Price Chart"
                          style={{ maxWidth: "100%", borderRadius: 8 }}
                        />
                      </div>
                    ) : (
                      <div
                        key={index}
                        className={`message message-${message.type}`}
                      >
                        {/* <div className="message-content">{message.content}</div>
                         */}
                        <div className="message-content text-left text-sm text-gray-800 leading-relaxed prose prose-sm prose-invert max-w-full">
                          <ReactMarkdown>{message.content}</ReactMarkdown>
                        </div>
                      </div>
                    )
                  )}

                  {isAnalyzing && (
                    <div className="analyzing-indicator">
                      <span>Analyzing</span>
                      <div className="analyzing-dots">
                        <div className="analyzing-dot"></div>
                        <div className="analyzing-dot"></div>
                        <div className="analyzing-dot"></div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="input-area-container">
              <div className="input-wrapper">
                <input
                  type="text"
                  className={`chat-input ${inputFocused ? "focused" : ""}`}
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  onFocus={() => setInputFocused(true)}
                  onBlur={() => setInputFocused(false)}
                  placeholder="Ask TradeGPT anything..."
                  disabled={isAnalyzing}
                />
                <button
                  className="send-buttongpt"
                  onClick={handleSendMessage}
                  disabled={!inputText.trim() || isAnalyzing}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22,2 15,22 11,13 2,9 22,2" />
                  </svg>
                </button>
              </div>

              <div className="disclaimer">
                This is for informational purposes only. Consult a professional
                Tradegpt before making investment decisions.
              </div>
            </div>
          </div>
        )}

        {/* ChatBot Button - Always visible */}
        <button
          className="chatbot-button"
          onClick={isChatOpen ? handleCloseChat : handleOpenChat}
        >
          <div className="chatbot-logo">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <span>ValourGPT</span>
          <svg
            className={`chatbot-chevron ${isChatOpen ? "rotated" : ""}`}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="6,9 12,15 18,9" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default TradeGPT;
