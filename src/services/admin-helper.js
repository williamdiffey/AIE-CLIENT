import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'
import './ArticlePage.css'

export default class AdminHelper extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = UserContext

  componentDidMount() {
    // console.log(user)
    //     const { articleId } = this.props.match.params
    //     this.context.clearError()
    //     AuthApiService.parseToken(articleId)
    //       .then(this.context.setArticle)
    //       .catch(this.context.setError)
    //     ArticleApiService.getArticleComments(articleId)
    //       .then(this.context.setComments)
    //       .catch(this.context.setError)
  }

  //   componentWillUnmount() {
  //     this.context.clearArticle()
  //   }

  //   renderArticle() {
  //     const { article, comments } = this.context
  //     return (
  //       <>
  //         <h2>{article.title}</h2>
  //         <p>
  //           <ArticleStyle article={article} />
  //           {article.author.id && (
  //             <>
  //               <Hyph />
  //               <ArticleAuthor article={article} />
  //             </>
  //           )}
  //           <Hyph />
  //           <NiceDate date={article.date_created} />
  //         </p>
  //         <ArticleContent article={article} />
  //         <ArticleComments comments={comments} />
  //         <CommentForm />
  //       </>
  //     )
  //   }

  //   render() {
  //     const { error, article } = this.context
  //     let content
  //     if (error) {
  //       content =
  //         error.error === `Article doesn't exist` ? (
  //           <p className='red'>Article not found</p>
  //         ) : (
  //           <p className='red'>There was an error</p>
  //         )
  //     } else if (!article.id) {
  //       content = <div className='loading' />
  //     } else {
  //       content = this.renderArticle()
  //     }
  //     return <Section className='ArticlePage'>{content}</Section>
  //   }
  // }

  // function ArticleStyle({ article }) {
  //   return (
  //     <span className='ArticlePage__style'>
  //       <StyleIcon style={article.style} /> {article.style}
  //     </span>
  //   )
}
