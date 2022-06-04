import { Outlet, Link } from 'react-router-dom';

const OrderList = () => {
    return (
      <>
        <header>
         <h2>다이어리 만들기</h2>
        </header>
        
        <section> 
         <ul>
          <li>1. Why React?</li><br/>
          <li><Link to='/creactReactApp'>2. Create React App</Link></li><br/>
          <li><Link to='/JSX'>3. JSX</Link></li><br/>
          <li>4. State</li><br/>
          <li>5. Props</li><br/>
         </ul>
        </section>

        <Outlet />
      </>
    );
}

export default OrderList;