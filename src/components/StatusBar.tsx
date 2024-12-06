export default function StatusBar({
  completedProgress,
}: {
  completedProgress: string;
}) {
  return (
    <div
      style={{ width: `${completedProgress}` }}
      className="fixed top-0 left-0 w-40 h-1 bg-blue-500 z-20"
    />
  );
}
