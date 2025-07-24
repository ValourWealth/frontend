// import { Calendar, Check, DollarSign, TrendingUp, X } from "lucide-react";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const AddTradeModal = ({ isOpen, onClose, onAddTrade }) => {
//   const [formData, setFormData] = useState({
//     symbol: "",
//     side: "Long",
//     entryPrice: "",
//     exitPrice: "",
//     quantity: "100",
//     entryDate: "",
//     exitDate: "",
//     tags: "",
//     notes: "",
//   });

//   const [tagsList, setTagsList] = useState([]);
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Predefined popular tags
//   const popularTags = [
//     "breakout",
//     "momentum",
//     "swing",
//     "scalp",
//     "trend-following",
//     "reversal",
//     "support-resistance",
//     "earnings-play",
//     "news-driven",
//     "technical-analysis",
//     "fundamental-analysis",
//     "high-confidence",
//     "medium-confidence",
//     "low-confidence",
//     "crypto",
//     "forex",
//     "stocks",
//   ];

//   useEffect(() => {
//     if (isOpen) {
//       // Reset form when modal opens
//       setFormData({
//         symbol: "",
//         side: "Long",
//         entryPrice: "",
//         exitPrice: "",
//         quantity: "100",
//         entryDate: "",
//         exitDate: "",
//         tags: "",
//         notes: "",
//       });
//       setTagsList([]);
//       setErrors({});
//       setIsSubmitting(false);
//     }
//   }, [isOpen]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: "",
//       }));
//     }
//   };

//   const handleTagsKeyPress = (e) => {
//     if (e.key === "Enter" && e.target.value.trim()) {
//       e.preventDefault();
//       const newTag = e.target.value.trim().toLowerCase();
//       if (!tagsList.includes(newTag)) {
//         setTagsList((prev) => [...prev, newTag]);
//       }
//       setFormData((prev) => ({
//         ...prev,
//         tags: "",
//       }));
//     }
//   };

//   const addPopularTag = (tag) => {
//     if (!tagsList.includes(tag)) {
//       setTagsList((prev) => [...prev, tag]);
//     }
//   };

//   const removeTag = (tagToRemove) => {
//     setTagsList((prev) => prev.filter((tag) => tag !== tagToRemove));
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.symbol.trim()) {
//       newErrors.symbol = "Symbol is required";
//     }

//     if (
//       !formData.entryPrice ||
//       isNaN(formData.entryPrice) ||
//       parseFloat(formData.entryPrice) <= 0
//     ) {
//       newErrors.entryPrice = "Valid entry price is required";
//     }

//     if (
//       !formData.exitPrice ||
//       isNaN(formData.exitPrice) ||
//       parseFloat(formData.exitPrice) <= 0
//     ) {
//       newErrors.exitPrice = "Valid exit price is required";
//     }

//     if (
//       !formData.quantity ||
//       isNaN(formData.quantity) ||
//       parseFloat(formData.quantity) <= 0
//     ) {
//       newErrors.quantity = "Valid quantity is required";
//     }

//     if (formData.entryDate && formData.exitDate) {
//       const entryDate = new Date(formData.entryDate);
//       const exitDate = new Date(formData.exitDate);
//       if (exitDate <= entryDate) {
//         newErrors.exitDate = "Exit date must be after entry date";
//       }
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const calculateProfitLoss = () => {
//     const entry = parseFloat(formData.entryPrice) || 0;
//     const exit = parseFloat(formData.exitPrice) || 0;
//     const qty = parseFloat(formData.quantity) || 0;

//     if (entry && exit && qty) {
//       if (formData.side === "Long") {
//         return (exit - entry) * qty;
//       } else {
//         return (entry - exit) * qty;
//       }
//     }
//     return 0;
//   };

//   const calculatePercentage = () => {
//     const entry = parseFloat(formData.entryPrice) || 0;
//     const exit = parseFloat(formData.exitPrice) || 0;

//     if (entry && exit) {
//       if (formData.side === "Long") {
//         return ((exit - entry) / entry) * 100;
//       } else {
//         return ((entry - exit) / entry) * 100;
//       }
//     }
//     return 0;
//   };

//   const calculateDuration = () => {
//     if (formData.entryDate && formData.exitDate) {
//       const entryDate = new Date(formData.entryDate);
//       const exitDate = new Date(formData.exitDate);
//       const diffTime = Math.abs(exitDate - entryDate);
//       const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//       return `${diffDays} day${diffDays !== 1 ? "s" : ""}`;
//     }
//     return "";
//   };

//   const handleSubmit = async () => {
//     if (!validateForm()) {
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       const tradeData = {
//         ...formData,
//         symbol: formData.symbol.toUpperCase(),
//         entryPrice: parseFloat(formData.entryPrice),
//         exitPrice: parseFloat(formData.exitPrice),
//         quantity: parseFloat(formData.quantity),
//         tags: tagsList,
//         profitLoss: calculateProfitLoss(),
//         percentage: calculatePercentage(),
//         duration: calculateDuration(),
//         timestamp: new Date().toISOString(),
//       };

//       if (onAddTrade) {
//         await onAddTrade(tradeData);
//       }

//       onClose();
//     } catch (error) {
//       console.error("Error adding trade:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleCancel = () => {
//     setFormData({
//       symbol: "",
//       side: "Long",
//       entryPrice: "",
//       exitPrice: "",
//       quantity: "100",
//       entryDate: "",
//       exitDate: "",
//       tags: "",
//       notes: "",
//     });
//     setTagsList([]);
//     setErrors({});
//     onClose();
//   };

//   if (!isOpen) return null;

//   const profitLoss = calculateProfitLoss();
//   const percentage = calculatePercentage();
//   const isProfit = profitLoss >= 0;

//   return (
//     <div className="enhanced-modal-overlay">
//       <div className="enhanced-modal-container">
//         <div className="enhanced-modal-header">
//           <button className="enhanced-close-button" onClick={onClose}>
//             <X size={20} />
//           </button>
//         </div>

//         <div className="enhanced-modal-content">
//           {/* Symbol and Side Row */}
//           <div className="enhanced-form-row">
//             <div className="enhanced-form-group">
//               <label className="enhanced-form-label">
//                 Symbol <span className="required-asterisk">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="symbol"
//                 value={formData.symbol}
//                 onChange={handleInputChange}
//                 placeholder="e.g., AAPL"
//                 className={`enhanced-form-input symbol-highlight ${
//                   errors.symbol ? "error-border" : ""
//                 }`}
//               />
//               {errors.symbol && (
//                 <span className="error-message">{errors.symbol}</span>
//               )}
//             </div>
//             <div className="enhanced-form-group">
//               <label className="enhanced-form-label">Side</label>
//               <select
//                 name="side"
//                 value={formData.side}
//                 onChange={handleInputChange}
//                 className="enhanced-form-select"
//               >
//                 <option value="Long">Long</option>
//                 <option value="Short">Short</option>
//               </select>
//             </div>
//           </div>

//           {/* Price and Quantity Row */}
//           <div className="enhanced-form-row">
//             <div className="enhanced-form-group">
//               <label className="enhanced-form-label">
//                 Entry Price <span className="required-asterisk">*</span>
//               </label>
//               <div className="input-with-icon">
//                 <DollarSign size={16} className="input-icon" />
//                 <input
//                   type="number"
//                   name="entryPrice"
//                   value={formData.entryPrice}
//                   onChange={handleInputChange}
//                   placeholder="0.00"
//                   step="0.01"
//                   className={`enhanced-form-input with-icon ${
//                     errors.entryPrice ? "error-border" : ""
//                   }`}
//                 />
//               </div>
//               {errors.entryPrice && (
//                 <span className="error-message">{errors.entryPrice}</span>
//               )}
//             </div>
//             <div className="enhanced-form-group">
//               <label className="enhanced-form-label">
//                 Exit Price <span className="required-asterisk">*</span>
//               </label>
//               <div className="input-with-icon">
//                 <DollarSign size={16} className="input-icon" />
//                 <input
//                   type="number"
//                   name="exitPrice"
//                   value={formData.exitPrice}
//                   onChange={handleInputChange}
//                   placeholder="0.00"
//                   step="0.01"
//                   className={`enhanced-form-input with-icon ${
//                     errors.exitPrice ? "error-border" : ""
//                   }`}
//                 />
//               </div>
//               {errors.exitPrice && (
//                 <span className="error-message">{errors.exitPrice}</span>
//               )}
//             </div>
//             <div className="enhanced-form-group">
//               <label className="enhanced-form-label">
//                 Quantity <span className="required-asterisk">*</span>
//               </label>
//               <input
//                 type="number"
//                 name="quantity"
//                 value={formData.quantity}
//                 onChange={handleInputChange}
//                 placeholder="100"
//                 step="0.01"
//                 className={`enhanced-form-input ${
//                   errors.quantity ? "error-border" : ""
//                 }`}
//               />
//               {errors.quantity && (
//                 <span className="error-message">{errors.quantity}</span>
//               )}
//             </div>
//           </div>

//           {/* Date Row */}
//           <div className="enhanced-form-row">
//             <div className="enhanced-form-group">
//               <label className="enhanced-form-label">Entry Date</label>
//               <div className="input-with-icon">
//                 <Calendar size={16} className="input-icon" />
//                 <input
//                   type="date"
//                   name="entryDate"
//                   value={formData.entryDate}
//                   onChange={handleInputChange}
//                   className="enhanced-form-input with-icon"
//                 />
//               </div>
//             </div>
//             <div className="enhanced-form-group">
//               <label className="enhanced-form-label">Exit Date</label>
//               <div className="input-with-icon">
//                 <Calendar size={16} className="input-icon" />
//                 <input
//                   type="date"
//                   name="exitDate"
//                   value={formData.exitDate}
//                   onChange={handleInputChange}
//                   className={`enhanced-form-input with-icon ${
//                     errors.exitDate ? "error-border" : ""
//                   }`}
//                 />
//               </div>
//               {errors.exitDate && (
//                 <span className="error-message">{errors.exitDate}</span>
//               )}
//             </div>
//           </div>

//           {/* Trade Summary */}
//           {formData.entryPrice && formData.exitPrice && formData.quantity && (
//             <div className="trade-summary-card">
//               <h6 className="summary-title">
//                 <TrendingUp size={16} className="me-2" />
//                 Trade Summary
//               </h6>
//               <div className="summary-row">
//                 <div className="summary-item">
//                   <span className="summary-label">P&L:</span>
//                   <span
//                     className={`summary-value ${
//                       isProfit ? "profit-text" : "loss-text"
//                     }`}
//                   >
//                     {isProfit ? "+" : ""}${profitLoss.toFixed(2)}
//                   </span>
//                 </div>
//                 <div className="summary-item">
//                   <span className="summary-label">Return:</span>
//                   <span
//                     className={`summary-value ${
//                       isProfit ? "profit-text" : "loss-text"
//                     }`}
//                   >
//                     {isProfit ? "+" : ""}
//                     {percentage.toFixed(2)}%
//                   </span>
//                 </div>
//                 <div className="summary-item">
//                   <span className="summary-label">Duration:</span>
//                   <span className="summary-value">
//                     {calculateDuration() || "N/A"}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Tags Section */}
//           <div className="enhanced-form-group-full">
//             <label className="enhanced-form-label">Tags</label>
//             <input
//               type="text"
//               name="tags"
//               value={formData.tags}
//               onChange={handleInputChange}
//               onKeyPress={handleTagsKeyPress}
//               placeholder="Type and press Enter to add tags"
//               className="enhanced-form-input"
//             />

//             {/* Popular Tags */}
//             <div className="popular-tags-section">
//               <span className="popular-tags-label">Popular tags:</span>
//               <div className="popular-tags-container">
//                 {popularTags.slice(0, 8).map((tag, index) => (
//                   <button
//                     key={index}
//                     type="button"
//                     onClick={() => addPopularTag(tag)}
//                     className={`popular-tag-button ${
//                       tagsList.includes(tag) ? "tag-selected" : ""
//                     }`}
//                     disabled={tagsList.includes(tag)}
//                   >
//                     {tagsList.includes(tag) && (
//                       <Check size={12} className="me-1" />
//                     )}
//                     {tag}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Selected Tags */}
//             {tagsList.length > 0 && (
//               <div className="selected-tags-container">
//                 {tagsList.map((tag, index) => (
//                   <span key={index} className="selected-tag-pill">
//                     {tag}
//                     <button
//                       type="button"
//                       onClick={() => removeTag(tag)}
//                       className="tag-remove-button"
//                     >
//                       ×
//                     </button>
//                   </span>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Notes Section */}
//           <div className="enhanced-form-group-full">
//             <label className="enhanced-form-label">Notes</label>
//             <textarea
//               name="notes"
//               value={formData.notes}
//               onChange={handleInputChange}
//               placeholder="Trade rationale, lessons learned, market conditions, etc."
//               className="enhanced-form-textarea"
//               rows={4}
//             />
//           </div>

//           {/* Form Actions */}
//           <div className="enhanced-modal-footer">
//             <button
//               onClick={handleCancel}
//               className="enhanced-cancel-button"
//               disabled={isSubmitting}
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handleSubmit}
//               className="enhanced-submit-button"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? (
//                 <>
//                   <div className="spinner"></div>
//                   Adding Trade...
//                 </>
//               ) : (
//                 "Add Trade"
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddTradeModal;
import axios from "axios";
import { Calendar, Check, DollarSign, TrendingUp, X } from "lucide-react";
import { useEffect, useState } from "react";

const AddTradeModal = ({ isOpen, onClose, onAddTrade }) => {
  const [formData, setFormData] = useState({
    symbol: "",
    side: "Long",
    entryPrice: "",
    exitPrice: "",
    quantity: "100",
    entryDate: "",
    exitDate: "",
    tags: "",
    notes: "",
  });

  const [tagsList, setTagsList] = useState([]);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Predefined popular tags
  const popularTags = [
    "breakout",
    "momentum",
    "swing",
    "scalp",
    "trend-following",
    "reversal",
    "support-resistance",
    "earnings-play",
    "news-driven",
    "technical-analysis",
    "fundamental-analysis",
    "high-confidence",
    "medium-confidence",
    "low-confidence",
    "crypto",
    "forex",
    "stocks",
  ];

  useEffect(() => {
    if (isOpen) {
      // Reset form when modal opens
      setFormData({
        symbol: "",
        side: "Long",
        entryPrice: "",
        exitPrice: "",
        quantity: "100",
        entryDate: "",
        exitDate: "",
        tags: "",
        notes: "",
      });
      setTagsList([]);
      setErrors({});
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleTagsKeyPress = (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      e.preventDefault();
      const newTag = e.target.value.trim().toLowerCase();
      if (!tagsList.includes(newTag)) {
        setTagsList((prev) => [...prev, newTag]);
      }
      setFormData((prev) => ({
        ...prev,
        tags: "",
      }));
    }
  };

  const addPopularTag = (tag) => {
    if (!tagsList.includes(tag)) {
      setTagsList((prev) => [...prev, tag]);
    }
  };

  const removeTag = (tagToRemove) => {
    setTagsList((prev) => prev.filter((tag) => tag !== tagToRemove));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.symbol.trim()) {
      newErrors.symbol = "Symbol is required";
    }

    if (
      !formData.entryPrice ||
      isNaN(formData.entryPrice) ||
      parseFloat(formData.entryPrice) <= 0
    ) {
      newErrors.entryPrice = "Valid entry price is required";
    }

    if (
      !formData.exitPrice ||
      isNaN(formData.exitPrice) ||
      parseFloat(formData.exitPrice) <= 0
    ) {
      newErrors.exitPrice = "Valid exit price is required";
    }

    if (
      !formData.quantity ||
      isNaN(formData.quantity) ||
      parseFloat(formData.quantity) <= 0
    ) {
      newErrors.quantity = "Valid quantity is required";
    }

    if (formData.entryDate && formData.exitDate) {
      const entryDate = new Date(formData.entryDate);
      const exitDate = new Date(formData.exitDate);
      if (exitDate <= entryDate) {
        newErrors.exitDate = "Exit date must be after entry date";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateProfitLoss = () => {
    const entry = parseFloat(formData.entryPrice) || 0;
    const exit = parseFloat(formData.exitPrice) || 0;
    const qty = parseFloat(formData.quantity) || 0;

    if (entry && exit && qty) {
      if (formData.side === "Long") {
        return (exit - entry) * qty;
      } else {
        return (entry - exit) * qty;
      }
    }
    return 0;
  };

  const calculatePercentage = () => {
    const entry = parseFloat(formData.entryPrice) || 0;
    const exit = parseFloat(formData.exitPrice) || 0;

    if (entry && exit) {
      if (formData.side === "Long") {
        return ((exit - entry) / entry) * 100;
      } else {
        return ((entry - exit) / entry) * 100;
      }
    }
    return 0;
  };

  const calculateDuration = () => {
    if (formData.entryDate && formData.exitDate) {
      const entryDate = new Date(formData.entryDate);
      const exitDate = new Date(formData.exitDate);
      const diffTime = Math.abs(exitDate - entryDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return `${diffDays} day${diffDays !== 1 ? "s" : ""}`;
    }
    return "";
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const token = localStorage.getItem("accessToken");
      const tradeData = {
        ...formData,
        symbol: formData.symbol.toUpperCase(),
        entry_price: parseFloat(formData.entryPrice),
        exit_price: parseFloat(formData.exitPrice),
        quantity: parseFloat(formData.quantity),
        tags: tagsList,
        notes: formData.notes,
        side: formData.side,
        entry_date: formData.entryDate || null,
        exit_date: formData.exitDate || null,
      };

      const res = await axios.post(
        `https://backend-production-1e63.up.railway.app/api/trades/`,
        tradeData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 201) {
        onAddTrade(res.data); // Push new trade to list
        onClose();
      }
    } catch (err) {
      console.error("Add trade failed:", err.response?.data || err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      symbol: "",
      side: "Long",
      entryPrice: "",
      exitPrice: "",
      quantity: "100",
      entryDate: "",
      exitDate: "",
      tags: "",
      notes: "",
    });
    setTagsList([]);
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  const profitLoss = calculateProfitLoss();
  const percentage = calculatePercentage();
  const isProfit = profitLoss >= 0;

  return (
    <div className="enhanced-modal-overlay">
      <div className="enhanced-modal-container">
        <div className="enhanced-modal-header">
          <button className="enhanced-close-button" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="enhanced-modal-content">
          {/* Symbol and Side Row */}
          <div className="enhanced-form-row">
            <div className="enhanced-form-group">
              <label className="enhanced-form-label">
                Symbol <span className="required-asterisk">*</span>
              </label>
              <input
                type="text"
                name="symbol"
                value={formData.symbol}
                onChange={handleInputChange}
                placeholder="e.g., AAPL"
                className={`enhanced-form-input symbol-highlight ${
                  errors.symbol ? "error-border" : ""
                }`}
              />
              {errors.symbol && (
                <span className="error-message">{errors.symbol}</span>
              )}
            </div>
            <div className="enhanced-form-group">
              <label className="enhanced-form-label">Side</label>
              <select
                name="side"
                value={formData.side}
                onChange={handleInputChange}
                className="enhanced-form-select"
              >
                <option value="Long">Long</option>
                <option value="Short">Short</option>
              </select>
            </div>
          </div>

          {/* Price and Quantity Row */}
          <div className="enhanced-form-row">
            <div className="enhanced-form-group">
              <label className="enhanced-form-label">
                Entry Price <span className="required-asterisk">*</span>
              </label>
              <div className="input-with-icon">
                <DollarSign size={16} className="input-icon" />
                <input
                  type="number"
                  name="entryPrice"
                  value={formData.entryPrice}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  step="0.01"
                  className={`enhanced-form-input with-icon ${
                    errors.entryPrice ? "error-border" : ""
                  }`}
                />
              </div>
              {errors.entryPrice && (
                <span className="error-message">{errors.entryPrice}</span>
              )}
            </div>
            <div className="enhanced-form-group">
              <label className="enhanced-form-label">
                Exit Price <span className="required-asterisk">*</span>
              </label>
              <div className="input-with-icon">
                <DollarSign size={16} className="input-icon" />
                <input
                  type="number"
                  name="exitPrice"
                  value={formData.exitPrice}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  step="0.01"
                  className={`enhanced-form-input with-icon ${
                    errors.exitPrice ? "error-border" : ""
                  }`}
                />
              </div>
              {errors.exitPrice && (
                <span className="error-message">{errors.exitPrice}</span>
              )}
            </div>
            <div className="enhanced-form-group">
              <label className="enhanced-form-label">
                Quantity <span className="required-asterisk">*</span>
              </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                placeholder="100"
                step="0.01"
                className={`enhanced-form-input ${
                  errors.quantity ? "error-border" : ""
                }`}
              />
              {errors.quantity && (
                <span className="error-message">{errors.quantity}</span>
              )}
            </div>
          </div>

          {/* Date Row */}
          <div className="enhanced-form-row">
            <div className="enhanced-form-group">
              <label className="enhanced-form-label">Entry Date</label>
              <div className="input-with-icon">
                <Calendar size={16} className="input-icon" />
                <input
                  type="date"
                  name="entryDate"
                  value={formData.entryDate}
                  onChange={handleInputChange}
                  className="enhanced-form-input with-icon"
                />
              </div>
            </div>
            <div className="enhanced-form-group">
              <label className="enhanced-form-label">Exit Date</label>
              <div className="input-with-icon">
                <Calendar size={16} className="input-icon" />
                <input
                  type="date"
                  name="exitDate"
                  value={formData.exitDate}
                  onChange={handleInputChange}
                  className={`enhanced-form-input with-icon ${
                    errors.exitDate ? "error-border" : ""
                  }`}
                />
              </div>
              {errors.exitDate && (
                <span className="error-message">{errors.exitDate}</span>
              )}
            </div>
          </div>

          {/* Trade Summary */}
          {formData.entryPrice && formData.exitPrice && formData.quantity && (
            <div className="trade-summary-card">
              <h6 className="summary-title">
                <TrendingUp size={16} className="me-2" />
                Trade Summary
              </h6>
              <div className="summary-row">
                <div className="summary-item">
                  <span className="summary-label">P&L:</span>
                  <span
                    className={`summary-value ${
                      isProfit ? "profit-text" : "loss-text"
                    }`}
                  >
                    {isProfit ? "+" : ""}${profitLoss.toFixed(2)}
                  </span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Return:</span>
                  <span
                    className={`summary-value ${
                      isProfit ? "profit-text" : "loss-text"
                    }`}
                  >
                    {isProfit ? "+" : ""}
                    {percentage.toFixed(2)}%
                  </span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Duration:</span>
                  <span className="summary-value">
                    {calculateDuration() || "N/A"}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Tags Section */}
          <div className="enhanced-form-group-full">
            <label className="enhanced-form-label">Tags</label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              onKeyPress={handleTagsKeyPress}
              placeholder="Type and press Enter to add tags"
              className="enhanced-form-input"
            />

            {/* Popular Tags */}
            <div className="popular-tags-section">
              <span className="popular-tags-label">Popular tags:</span>
              <div className="popular-tags-container">
                {popularTags.slice(0, 8).map((tag, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => addPopularTag(tag)}
                    className={`popular-tag-button ${
                      tagsList.includes(tag) ? "tag-selected" : ""
                    }`}
                    disabled={tagsList.includes(tag)}
                  >
                    {tagsList.includes(tag) && (
                      <Check size={12} className="me-1" />
                    )}
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Tags */}
            {tagsList.length > 0 && (
              <div className="selected-tags-container">
                {tagsList.map((tag, index) => (
                  <span key={index} className="selected-tag-pill">
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="tag-remove-button"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Notes Section */}
          <div className="enhanced-form-group-full">
            <label className="enhanced-form-label">Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Trade rationale, lessons learned, market conditions, etc."
              className="enhanced-form-textarea"
              rows={4}
            />
          </div>

          {/* Form Actions */}
          <div className="enhanced-modal-footer">
            <button
              onClick={handleCancel}
              className="enhanced-cancel-button"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="enhanced-submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="spinner"></div>
                  Adding Trade...
                </>
              ) : (
                "Add Trade"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTradeModal;
