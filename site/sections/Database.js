import React from 'react';
import cx from 'classnames';

const DATABASE_SVG = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 50 50">
    <path d="M24.985,0C37.556,0,46,4.576,46,8.849c0,4.274-8.444,8.85-21.015,8.85c-12.572,0-21.017-4.576-21.017-8.85 C3.968,4.576,12.413,0,24.985,0z M46,39.151C46,43.424,37.556,48,24.985,48c-12.572,0-21.017-4.576-21.017-8.849v-5.195 c3.676,3.753,11.597,6.302,21.017,6.302c9.418,0,17.34-2.549,21.015-6.302V39.151z M46,29.196c0,4.272-8.444,8.849-21.015,8.849 c-12.572,0-21.017-4.576-21.017-8.849v-5.286c3.676,3.752,11.597,6.301,21.017,6.301c9.418,0,17.34-2.549,21.015-6.301V29.196z M46,19.15C46,23.424,37.556,28,24.985,28c-12.572,0-21.017-4.576-21.017-8.85v-5.541c3.676,3.753,11.597,6.301,21.017,6.301 c9.418,0,17.34-2.547,21.015-6.301V19.15z"></path>
  </svg>
);


const Database = (props) => {
  let description;

  switch (props.database) {
    case 'mongodb':
      description = (
        <div>
          <strong><a href="http://mongodb.org/" target="_blank">MongoDB</a></strong> — Document-oriented, general purpose NoSQL database.
        </div>
      );
      break;
    case 'mysql':
      description = (
        <div>
          <strong><a href="http://www.mysql.com/" target="_blank">MySQL</a></strong> — The world's most popular open source database.
        </div>
      );
      break;
    case 'postgresql':
      description = (
        <div>
          <strong><a href="http://www.postgresql.org/" target="_blank">PostgreSQL </a></strong> — The world's most advanced open source database.
        </div>
      );
      break;
    case 'rethinkdb':
      description = (
        <div>
          <strong><a href="https://www.rethinkdb.com/" target="_blank">RethinkDB</a></strong> — The open source database
          for the realtime web.
        </div>
      );
      break;
    default:
      description = <div className="placeholder"> </div>;
  }

  const recommended = props.beginner ? (
    <span className="hint--top hint--rounded" data-hint="Recommended">
        <img src="/img/svg/recommended.svg" alt="Recommended" />
      </span>
  ) : null;

  return (
    <div className={cx('zoomInBackwards panel', props.database)}>
      <div className="panel-heading">
        <h6>{DATABASE_SVG}{!props.database || props.database === 'none' ? 'Database' : props.database}</h6>
        <a href="#" className="stats-icon hint--top hint--rounded" data-hint="Download Stats">
          <i className="fa fa-bar-chart" />
        </a>
      </div>
      <div className="panel-body">
        {description}
        <div className="radio-group">
          <label className="radio-inline">
            <img className="btn-logo" src="/img/svg/none.png" alt="None" />
            <input type="radio" name="databaseRadios" value="none" onChange={props.handleChange} checked={props.database === 'none'} />
            <span>None</span>
          </label>
          <label className="radio-inline">
            <img className="btn-logo" src="/img/svg/mongodb-logo.svg" alt="MongoDB" />
            <input type="radio" name="databaseRadios" value="mongodb" onChange={props.handleChange} checked={props.database === 'mongodb'} />
            <span>MongoDB</span>
            {recommended}
          </label>
          <label className="radio-inline">
            <img className="btn-logo" src="/img/svg/mysql-logo.svg" alt="MySQL" />
            <input type="radio" name="databaseRadios" value="mysql" onChange={props.handleChange} checked={props.database === 'mysql'} />
            <span>MySQL</span>
          </label>
          <label className="radio-inline">
            <img className="btn-logo" src="/img/svg/postgresql-logo.svg" alt="PostgreSQL" />
            <input type="radio" name="databaseRadios" value="postgresql" onChange={props.handleChange} checked={props.database === 'postgresql'} />
            <span>PostgreSQL</span>
          </label>
          <label className="radio-inline">
            <img className="btn-logo" src="/img/svg/rethinkdb-logo.svg" alt="RethinkDB" />
            <input type="radio" name="databaseRadios" value="rethinkdb" onChange={props.handleChange} checked={props.database === 'rethinkdb'} />
            <span>RethinkDB</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Database;
