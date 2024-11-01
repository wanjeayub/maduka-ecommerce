function Register() {
  return (
    <div className="max-w-6xl mx-auto bg-slate-500">
      <div className="flex flex-col">
        <div>Register page</div>
        <form className="flex flex-col gap-3 mx-auto">
          <label htmlFor="name" className="flex gap-3">
            Name
            <input type="text" placeholder="Enter name" className="w-[400px]" />
          </label>
          <input type="text" placeholder="Enter email" />
          <input type="text" placeholder="Enter mobile number" />
          <input type="text" placeholder="Enter alternate mobile number" />
          <input type="text" />
          <input type="text" />
        </form>
      </div>
    </div>
  );
}

export default Register;
