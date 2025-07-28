import { userState, tokenState } from '../state/userData';

const Profile = () => {
  const  user = userState.get();
  const token = tokenState.get();


  console.log("the global data:",user,token)

  return (
    <div style={{ padding: 20 }}>
      <h2>User Profile</h2>

      {user ? (
        <div>
          <p><strong>Name:</strong> {user.first_name} {user.last_name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <img src={user.avatar} alt="avatar" width={100} />
          <p><strong>Token:</strong> {token}</p>
        </div>
      ) : (
        <p>No user logged in</p>
      )}
    </div>
  );
};

export default Profile;
