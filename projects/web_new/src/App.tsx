import React from 'react';
import './App.css';
import { Layout } from 'antd';

const App: React.FC = () => {
  return (
    <Layout className="h-screen">
      <Layout.Header>header</Layout.Header>
      <Layout className="p-6">
        <Layout.Content>main content</Layout.Content>
      </Layout>
      <Layout.Footer className="p-6">footer</Layout.Footer>
    </Layout>
  );
}

export default App;
