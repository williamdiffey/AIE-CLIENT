import React, { Component } from 'react'
import ArticleListContext from '../../contexts/ArticleListContext'
// import UserContext from '../../contexts/UserContext'
import ArticleApiService from '../../services/article-api-service'
import { Section } from '../../components/Utils/Utils'
import ArticleListItem from '../../components/ArticleListItem/ArticleListItem'

export default class ArticleListPage extends Component {
  static contextType = ArticleListContext

  componentDidMount() {
    this.context.clearError()
    ArticleApiService.getArticles()
      .then(this.context.setArticleList)
      .catch(this.context.setError)
  }

  renderArticles() {
    const { articleList = [] } = this.context

    // console.log(UserContext.user)
    return (
      <div>
        {articleList.map((article) => (
          <ArticleListItem key={article.id} article={article} />
        ))}
      </div>
    )
  }

  render() {
    const { error } = this.context
    return (
      <Section list className='ArticleListPage'>
        {error ? (
          <p className='red'>There was an error, try again</p>
        ) : (
          this.renderArticles()
        )}
      </Section>
    )
  }
}
