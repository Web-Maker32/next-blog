export default function Footer() {
  return (
    <footer className="w-full py-8 text-center text-sm text-gray-600 dark:text-gray-400 border-t border-gray-400 dark:border-gray-800 mt-auto transition-colors duration-300">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Next Blog. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="hover:text-blue-500 transition-colors">Twitter</a>
          <a href="#" className="hover:text-blue-500 transition-colors">GitHub</a>
          <a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
