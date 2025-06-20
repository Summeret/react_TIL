import Header from "./Header.jsx";
import './Test.css'

//컴포넌트 생성 Test (부모 컴퍼넌트)
function Test(){
    return (
        <>
            <Header />
            <Aside />
            <h1>Test 컴포넌트</h1>
        </>
    )
}
//다른 컴포넌트에서 해당 Test컴포넌트 사용가능하도록 내보내기 설정
export default Test;

// 자식 컴포넌트
function Aside(){
    return (
        <aside style={{backgroundColor:'pink'}}>
            <h2>전체메뉴</h2>
            <a href="#">메뉴1</a>
            <hr />
            <a href="#">서브메뉴1</a>
            <a href="#">서브메뉴2</a>
        </aside>
    )
}