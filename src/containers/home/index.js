import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getHomeList } from "./store/actions";
import styles from "./style.css";

const Home = (props) => {
  if (props.staticContext) {
    props.staticContext.css = styles._getCss();
  }

  useEffect(() => {
    if (!props.list.length) {
      props.getHomeList(false);
    }
    console.log(styles.test);
  }, []);

  return (
    <div>
      <div className={`${styles.test ? styles.test : "hehe"}`}>
        home:{props.name}
      </div>
      {props.list.map((item) => {
        return (
          <div key={item.id}>
            {item.id}:{item.title}
          </div>
        );
      })}
      <br />
      <button onClick={() => alert(1)}>点击</button>
    </div>
  );
};

Home.loadData = (store) => {
  console.log("server");
  // 这个函数负责在服务器渲染前，把这个路由需要的数据加载好
  return store.dispatch(getHomeList(true));
};

const mapStateToProps = (state) => {
  return {
    name: state.home.name,
    list: state.home.newList,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getHomeList: () => {
    dispatch(getHomeList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
