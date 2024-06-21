import Logo from "../ima/Admin.jpg";
function AdminDetails() {
  return (
    <>
      <div className="back"></div>
      <section className="">
        <div className="container">
          <h1>Admin Details</h1>
        </div>

        <div className="container grid grid-cols-3">
          <div className="card">
            <div className="card-img">
              <img src={Logo} alt="" width="200" />
            </div>
            <div className="card-details">
              <div className="grid grid-cols-2">
                <p>Username: </p>
              </div>
              <p>Email: </p>
              <p>Contact:</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminDetails;
