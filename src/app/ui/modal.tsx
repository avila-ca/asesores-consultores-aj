interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}
export default function Modal({ children, onClose }: { children: React.ReactNode, onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="relative w-full max-w-4xl mx-2 my-4 bg-white rounded shadow-lg max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-10 text-2xl text-gray-700 hover:text-red-500 bg-white rounded-full p-1 shadow"
          aria-label="Cerrar"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}