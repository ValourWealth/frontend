import { useEffect, useRef, useState } from "react";

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
    const upperText = text.toUpperCase();

    const forexPattern = /\b([A-Z]{3})[\/\-\s]?([A-Z]{3})\b/g;
    const forexMatches = [];
    let match;

    while ((match = forexPattern.exec(upperText)) !== null) {
      if (
        knownCurrencies.includes(match[1]) &&
        knownCurrencies.includes(match[2])
      ) {
        forexMatches.push(`${match[1]}/${match[2]}`);
      }
    }

    const tickerPattern = /\b[A-Z]{2,5}\b/g;
    const allTickers = upperText.match(tickerPattern) || [];
    const filteredTickers = allTickers.filter(
      (t) =>
        !knownCurrencies.includes(t) &&
        !forexMatches.some((pair) => pair.includes(t))
    );

    return {
      forexPairs: forexMatches,
      tickers: [...new Set(filteredTickers)],
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
    const systemPrompt = `You are TradeGPT, a professional market analyst. Use the real-time market data provided to analyze and respond clearly and professionally with trading insights. Summarize price action, trends, and provide possible interpretations.`;

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

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = inputText;
    setMessages((prev) => [...prev, { type: "user", content: userMessage }]);
    setInputText("");
    setIsAnalyzing(true);

    try {
      // let tickers = extractTickers(userMessage);
      let { forexPairs, tickers } = extractEntities(userMessage);

      if (tickers.length === 0) tickers = [ticker];

      let realTimeData = [];

      for (const tkr of tickers) {
        const [alphaData, finnhubData] = await Promise.all([
          fetchAlphaVantageData(tkr),
          fetchFinnhubData(tkr),
        ]);
        if (alphaData) realTimeData.push(alphaData);
        if (finnhubData) realTimeData.push(finnhubData);
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

        .chat-messages {
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
          background: #667eea;
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
        .chat-messages::-webkit-scrollbar {
          width: 4px;
        }

        .chat-messages::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        .chat-messages::-webkit-scrollbar-thumb {
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
                <div className="chat-messages">
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
                        <div className="message-content">{message.content}</div>
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
                before making investment decisions.
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
