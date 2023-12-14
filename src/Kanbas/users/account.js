import * as client from "./client";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
function Account() {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };

  const save = async () => {
    await client.updateUser(account);
  };
  if (id) {
    findUserById(id);
  } else {
    fetchAccount();
  }
  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/signin");
  };

  return (
    <div className="w-50">
      <h1>Account</h1>
      <div>
        <div class="list-group">
          <Link
            to="/Kanbas/signin"
            class="list-group-item list-group-item-action"
          >
            Signin
          </Link>
          <Link
            to="/Kanbas/signup"
            class="list-group-item list-group-item-action"
          >
            Signup
          </Link>
          <Link
            to="/Kanbas/Account"
            class="list-group-item list-group-item-action"
          >
            Account
          </Link>
          <Link
            to="/Kanbas/admin/users"
            class="list-group-item list-group-item-action"
          >
            User Table
          </Link>
        </div>
      </div>
      {account && (
        <div>
          <input
            value={account.password}
            onChange={(e) =>
              setAccount({ ...account, password: e.target.value })
            }
            placeholder="password"
            className="form-control"
          />
          <input
            value={account.firstName}
            onChange={(e) =>
              setAccount({ ...account, firstName: e.target.value })
            }
            className="form-control"
            placeholder="First Name"
          />
          <input
            value={account.lastName}
            onChange={(e) =>
              setAccount({ ...account, lastName: e.target.value })
            }
            className="form-control"
            placeholder="Last Name"
          />
          <input
            value={account.dob}
            onChange={(e) => setAccount({ ...account, dob: e.target.value })}
            placeholder="Date of Birth"
            className="form-control"
          />
          <input
            value={account.email}
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
            className="form-control"
            placeholder="email"
          />
          <select
            onChange={(e) => setAccount({ ...account, role: e.target.value })}
            className="form-select"
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button className="btn btn-primary" onClick={save}>
            Save
          </button>
          <button className="btn btn-secondary" onClick={signout}>
            Signout
          </button>
          <Link to="/Kanbas/admin/users" className="btn btn-warning w-100">
            Users
          </Link>
        </div>
      )}
    </div>
  );
}
export default Account;
