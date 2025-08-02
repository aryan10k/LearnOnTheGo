import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const {user} = useSelector(store=>store.auth)
  return (
    <>
      {/* <h1 className='text-7xl'>Dashboard</h1> */}
      <div className="flex md:h-screen bg-gray-100">
      
      

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

     

        {/* Dashboard Content */}
        <main className="p-6 space-y-6">
          {/* Welcome Section */}
          <section className="bg-green-700 text-white rounded-lg p-6">
            <h1 className="text-2xl font-bold">Welcome back, {user.name}!</h1>
            <a href="/courses"  className="mt-4 inline-block bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100">
              Browse New Courses
            </a>
          </section>
         {/*can add section to admin dash board here for future updates*/ }
        </main>
      </div>
    </div>
    </>
  )
}

export default Dashboard