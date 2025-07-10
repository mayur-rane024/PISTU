const NotAllowed = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Registration Not Allowed</h1>
      <p className="text-xl text-center">
        Sorry, public registration is not allowed for this application.
      </p>
    </div>
  );
};

export default NotAllowed;
