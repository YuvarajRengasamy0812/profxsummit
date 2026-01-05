import { useEffect } from "react";
import { createPortal } from "react-dom";

const BoothModal = ({ booth, onClose, onReserve }) => {

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);

    // Lock background scroll
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div className="booth-modal-overlay d-flex align-items-center justify-content-center" onClick={onClose}>
  <div className="booth-modal bg-white rounded shadow p-4 position-relative" onClick={(e) => e.stopPropagation()}>
    
    <h2 className="booth-modal-title mb-2">{booth.title}</h2>
    <p className="booth-modal-subtitle mb-3">
      Type: {booth.boothType} | Size: {booth.subtitle}
    </p>

    <form id="reserve-form" className="d-flex flex-column gap-2">
      <input type="text" name="name" placeholder="Your Name" className="form-control mb-2" required />
      <input type="text" name="company" placeholder="Company" className="form-control mb-2" required />
      <input type="tel" name="phone" placeholder="Phone" className="form-control mb-2" required />
    </form>

    <div className="d-flex justify-content-end gap-2 mt-3">
      <button type="button" className="btn btn-outline-secondary" onClick={onClose}>
        Close
      </button>
      <button
        type="button"
        className="btn btn-pink text-white"
        onClick={(e) => {
          e.preventDefault();
          const form = document.getElementById("reserve-form");
          const name = form.name.value;
          const company = form.company.value;
          const phone = form.phone.value;
          if (!name || !company || !phone) return;

          onReserve({ name, company, phone });
          onClose();
        }}
      >
        Reserve
      </button>
    </div>
  </div>
</div>
,
    document.getElementById("modal-root")
  );
};

export default BoothModal;
