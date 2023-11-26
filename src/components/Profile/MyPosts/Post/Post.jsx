import cls from './Post.module.css'
const Post = (props) => {
    return (
      <div className={cls.item}>
        <div>
          <img src="https://klike.net/uploads/posts/2019-03/1551511862_19.jpg" alt="av" />
          <p>{props.message}</p>
        </div>
        <span>Like: {props.like}</span>
      </div>
      
    )
};

export default Post;