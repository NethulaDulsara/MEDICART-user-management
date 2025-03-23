import React from 'react';
import { useNavigate } from 'react-router-dom';

// Card component moved inside the same file for better organization
const DashboardCard = ({ name, path, icon, description }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(path)}
      className="group relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm border border-yellow-500/20 p-6 hover:bg-black/50 transition-all cursor-pointer hover:shadow-lg hover:shadow-yellow-500/10 py-10"
    >
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-yellow-500 flex items-center justify-center text-2xl shadow-lg">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
          <p className="text-yellow-100/80 text-sm">{description}</p>
        </div>
      </div>
      <div className="absolute inset-0 border-2 border-yellow-500 opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity" />
    </div>
  );
};

export default function CustomerDashboard() {
  const dashboardItems = [
    {
      name: 'Pharmacy Products',
      path: '/products',
      icon: '💊',
      description: 'Browse and purchase pharmaceutical products'
    },
    {
      name: 'Prescription Upload',
      path: '/prescription',
      icon: '📄',
      description: 'Upload prescriptions for medicine orders'
    },
    {
      name: 'Order History',
      path: '/orders',
      icon: '📦',
      description: 'View your past orders and track current ones'
    },
    {
      name: 'Payment History',
      path: '/payments',
      icon: '💳',
      description: 'View your previous payments and invoices'
    },
    {
      name: 'Customer Support',
      path: '/support',
      icon: '💬',
      description: 'Get help with your orders or pharmacy-related queries'
    }
  ];

  return (
    <div 
      className="min-h-screen px-6 bg-cover bg-center bg-no-repeat py-24"
      style={{
        backgroundImage: "url('https://www.example.com/your-background-image.jpg')",  // Update with a relevant background
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlend: 'overlay'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Customer Dashboard</h1>
          <p className="text-yellow-100/80 text-lg">Manage your pharmacy orders and profile</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dashboardItems.map((item, index) => (
            <DashboardCard
              key={index}
              name={item.name}
              path={item.path}
              icon={item.icon}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
