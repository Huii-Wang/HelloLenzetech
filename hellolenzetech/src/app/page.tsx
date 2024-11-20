import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* 导航栏 */}
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">伦茨科技</h1>
          <div className="space-x-6">
            <a href="#about" className="hover:text-gray-200">关于我们</a>
            <a href="#products" className="hover:text-gray-200">产品服务</a>
            <a href="#contact" className="hover:text-gray-200">联系我们</a>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="container mx-auto px-4 py-8">
        {/* 公司简介部分 */}
        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">关于伦茨科技</h2>
          <p className="text-gray-600 leading-relaxed">
            伦茨科技是一家致力于技术创新的高科技企业，专注于为客户提供先进的技术解决方案。
            我们拥有专业的研发团队和丰富的行业经验，始终以客户需求为导向，追求卓越品质。
          </p>
        </section>

        {/* 产品服务部分 */}
        <section id="products" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">产品服务</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">智能制造解决方案</h3>
              <p className="text-gray-600">为制造业提供智能化、自动化的生产线解决方案</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">工业物联网平台</h3>
              <p className="text-gray-600">提供全方位的工业物联网数据采集和分析服务</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">技术咨询服务</h3>
              <p className="text-gray-600">专业的技术团队为企业提供定制化的技术咨询</p>
            </div>
          </div>
        </section>

        {/* 联系方式部分 */}
        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">联系我们</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-2">电话：400-XXX-XXXX</p>
            <p className="text-gray-600 mb-2">邮箱：contact@lentz-tech.com</p>
            <p className="text-gray-600">地址：深圳市南山区科技园</p>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>© 2024 伦茨科技 版权所有</p>
        </div>
      </footer>
    </div>
  );
}
