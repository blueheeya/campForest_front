import { useState } from 'react';
import './assets/css/style.scss';
import BackWrap from './component/layout/BackWrap';
import { HeaderType1, HeaderType2 } from './component/layout/Header';
function Layout(){
  <>
    <BackWrap>
      <HeaderType1 />
    </BackWrap>
  </>
}

function App() {
  const [titleStore, setTitleStore] = useState();
  return (
    <>
    <BackWrap>
      <HeaderType2 children={'캠핑장 예약하기'} className={'headerType2'} titleStore={true} />
      <div style={{height:"1000px"}} className='item'></div>
    </BackWrap>
    </>
  );
}

export default App;