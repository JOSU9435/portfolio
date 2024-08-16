const Loader = () => {
  return (
    <div className="fixed items-center flex z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="w-1.5 mx-2 h-12 bg-accent-100 rounded-md animate-loader"></div>
      <div className="w-1.5 mx-2 delay-200 h-0 bg-accent-200 rounded-md animate-loader"></div>
      <div className="w-1.5 mx-2 h-12 bg-accent-100 rounded-md animate-loader"></div>
      <div className="w-1.5 mx-2 delay-200 h-0 bg-accent-200 rounded-md animate-loader"></div>
      <div className="w-1.5 mx-2 h-12 bg-accent-100 rounded-md animate-loader"></div>
    </div>
  );
}
 
export default Loader