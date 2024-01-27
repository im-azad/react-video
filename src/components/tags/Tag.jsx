function Tag({ title }) {
  return (
    <>
      <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">
        <p>{title}</p>
      </div>
    </>
  );
}

export default Tag;
