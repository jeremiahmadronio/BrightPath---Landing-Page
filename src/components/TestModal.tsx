import { X } from 'lucide-react'

interface TestModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TestModal({ isOpen, onClose }: TestModalProps) {
  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{ zIndex: 99999 }}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div 
        className="relative bg-white rounded-lg shadow-2xl w-full max-w-md p-8"
        onClick={(e) => e.stopPropagation()}
        style={{ zIndex: 100000 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>
        
        <h2 className="text-2xl font-bold mb-4 text-navy">Test Modal</h2>
        <p className="text-gray-700">
          If you can see this modal clearly on top of everything, 
          then the modal system is working. Click outside or the X to close.
        </p>
      </div>
    </div>
  )
}
