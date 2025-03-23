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

export default function AdminDashboard() {
  const dashboardItems = [
    {
      name: 'Customer Management',
      path: '/admin/customers',
      icon: '👥',
      description: 'Manage customer profiles and orders'
    },
    {
      name: 'Inventory Management',
      path: '/admin/inventory',
      icon: '📦',
      description: 'Track and manage inventory of medications'
    },
    {
      name: 'Prescription Management',
      path: '/admin/prescriptions',
      icon: '📄',
      description: 'Review and manage customer prescriptions'
    },
    {
      name: 'Order Management',
      path: '/admin/orders',
      icon: '🛒',
      description: 'Manage and track customer orders'
    },
    {
      name: 'Supplier Management',
      path: '/admin/suppliers',
      icon: '🤝',
      description: 'Manage relationships with pharmaceutical suppliers'
    },
    {
      name: 'Payment History',
      path: '/admin/payments',
      icon: '💳',
      description: 'Track payments made by customers'
    },
    {
      name: 'Reports & Analytics',
      path: '/admin/reports',
      icon: '📊',
      description: 'View reports and analytics for business insights'
    },
    {
      name: 'Support Tickets',
      path: '/admin/support',
      icon: '💬',
      description: 'Manage customer support queries'
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
          <h1 className="text-4xl font-bold text-white mb-4">Admin Dashboard</h1>
          <p className="text-yellow-100/80 text-lg">Manage the pharmacy operations efficiently</p>
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

