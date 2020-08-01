import React from 'react';
import './Project.scss';
import {  FaGithub, FaBehance, FaRegCalendarCheck } from 'react-icons/fa';
import Tag from '../Tag/Tag';
// import tags from '../Tag/tags';


class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            classTag: '',
        };

    }
  
    render() {
        // const data = [{'name': 'test1'}, {'name':'test2'}];
        // const listitem = data.map((d) => <li key={d.name} > {d.name} </li>);
        // console.log("asdasdasdasdasda");
        // const labels = this.props.labels;
        // const l = labels.map( (label) => {
            //     label.forEach(value => 
            //         <Tag key={label} value={value} />
            //     );
            // });
            // <Tag key={element} labels={element} />
            
            // );
            // let i=0;
            // const labels = [['npm'], ['react', 'css'], ['react', 'graphql'], ['js'], ['css'], ['none'] ];
            // const labs = labels.map( (x) => 
            
            //         x.map( (value) =>
            //             <Tag value={value} key={value} /> 
            //         )
            // );
            
      

        return (
            <div className="box work-item plain-text ">
                {/* <div>
                    {listitem}
                </div> */}

                <article className="media">
                    {/* <div className="media-left">
                    </div> */}
                    <div className="content content-image">
                        <figure className="image ">
                            <img src={this.props.image} alt="me"/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p className="">
                                <strong>{this.props.name}</strong> 
                            </p>
                            <p className="date-content">
                                <FaRegCalendarCheck className="icon-calendar"/> 
                                <small>{this.props.date}</small> 
                            </p>
                        </div>
                        <div className="content">
                            <p>{this.props.desc}</p> 
                        </div>
                        <nav className="level is-mobile">
                            <div className="level-left">
                                <div className={`${this.props.label1 ? '' : 'empty-tag'} `}>
                                    <Tag  value = {this.props.label1} />
                                </div>
                                <div className={`${this.props.label2 ? '' : 'empty-tag'} `} >
                                    <Tag value = {this.props.label2} />
                                </div>
                                <div className={`${this.props.label3 ? '' : 'empty-tag'} `}>
                                    <Tag  value = {this.props.label3} />
                                </div>
                            </div>
                            <div className="level-right">
                                <a className={`level-item ${this.props.ibe === 'behance' ? '' : 'empty-tag'}   `}  href={this.props.behref} aria-label="" target="_black">
                                    <FaBehance  className="icon-behance" />
                                </a>
                                <a className={`level-item ${this.props.igit === 'github'  ? '' : 'empty-tag'} `}  href={this.props.githref} aria-label=""  target="_black">
                                    <FaGithub  className="icon-git" />
                                </a>
                            </div>
                        </nav>
                    </div>
                </article>
            </div>
        );
    }
}

export default Project;