import React from 'react';
import classes from "./PublicationItem.module.scss"
import downloadIcon from 'src/assets/images/landing/download-icon.svg'
import { isEmpty } from 'lodash';

const PublicationItem = (props) => {
  const { src, month, year, title, subTitle, actions, bgColor } = props
  return (
    <div className={classes.root + ' mb-3'} style={{ backgroundColor: bgColor }}>
      <img src={src} className={classes.img} />
      <div className={classes.content}>
        <div className={classes.subTitle + ' d-flex flex-row'}>
          <span className={classes.month + ' me-2'}>{month}</span>
          <span className={classes.year}>{year}</span>
        </div>
        <h3 className={classes.title + ' fw-bold'}>{title}</h3>
        <div className={'d-flex justify-content-start ' + classes.downloadBtn}>
          <img src={downloadIcon}></img>
          {actions.map((item, index) => {
            switch (item.name) {
              case 'en':
                return <a key={index} href={item.url} target="_blank" className={!(item.url) ? classes.downloadDisabled : ''}>EN</a>
              case 'cn':
                return <a key={index} href={item.url} target="_blank" className={!(item.url) ? classes.downloadDisabled : ''}>中</a>
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default PublicationItem;