import { prismaClient } from "db/client";

export default async function Home() {
  const users = await prismaClient.user.findMany()  

  return (
    <div>
      <h1>Welcome to Cohort</h1>
      <p>This is the home page</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))} 
      </ul>       
    </div>
  );    
}