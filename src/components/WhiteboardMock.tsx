export default function WhiteboardMock() {
  return (
    <section className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Whiteboard</h3>
      <div className="bg-white">
        <canvas className="w-full h-64 bg-gray-100 border border-gray-300 rounded-lg"></canvas>
        <p className="text-gray-600 mt-2">Mock Excalidraw-like whiteboard for noting project details.</p>
      </div>
    </section>
  );
}