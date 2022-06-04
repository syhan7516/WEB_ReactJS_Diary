const Create_React_App = () => {
    return(
        <>
           <h2>React 생성 : npx create-react-App ProjectName</h2>
           <h2>React 시작 : npm start</h2>
           <h2>React 순서 : index.html (root) → index.js → App.js</h2> 

           <h2>React File</h2>
           <p>
               node_modules <br/>
               : 외부모듈을 저장하고있는 폴더 ! (굉장히 많고, 용량이 큼 !)<br/>
               : 보통 이걸빼고, git이나 다른 곳에 저장 보관 !<br/>
	           : 지워져도 어떤 모듈을 사용해야하는 지가 package.json / package.lock.json에 작성<br/>
	           : 노드모듈스가 없다면 npm i 또는 npm install<br/>
           </p>

           <p>
               public <br/>
               favicon : 탭 상단 페이지 아이콘 !<br/>
               manifest.json : 모바일환경에서 적용해야 할 여러 가지 정보를 저장 !<br/>
	           robots.txt : 웹사이트가 수집 후 검색 엔진에 띄어주는데, 그에 대한 정보 !<br/>
           </p>
        </>
    );
}

export default Create_React_App;