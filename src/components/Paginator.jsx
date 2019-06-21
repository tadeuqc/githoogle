import React  from 'react';
import Link                   from 'next/link';
import querystring from 'querystring';
import styled from 'styled-components';

const Container = styled.div`
	margin: 30px 0;
	display: flex;
	flex-direction: row;
`
const Child = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`
const BottomLink = styled.a`
	cursor: pointer;
	margin-top: -10px;
`
const ImgLink = styled.img`
	cursor: pointer;
`

const Paginator = props => {
	const {pages,page,maxPages,query,handlePageChange, show} = props;
	const generateLink = page => {
		let params = query;
		params = {...params, page: page}
		const qs = querystring.stringify( params );
		return `?${qs}`
	}
	const getPageLinks = () => {
		let links = [];


		if(pages < maxPages) {

			for(let i = 1; i <= pages; i ++) {
				const link = generateLink(i)
				links.push({page: i, link: link})
			}
		}
		else {
			let firstPage = (page <= 3) ? 1 : (((page + 2) <= pages) ? page - 2 : pages - (maxPages - 1))
			for(let i = firstPage;i <= (firstPage + (maxPages - 1)); i++) {
				const link = generateLink(i)
				links.push({page: i, link: link})
			}
		}


		return links;
	}

	let pageLinks = getPageLinks();
	return (
		<div>
			{show && <Container>
				<Link key='first' href={generateLink(1)}>
					<ImgLink src='../static/gith.png' width='54' height='30' />
				</Link>
				{pageLinks.map(link => {
					return(
						<Child key={link.page}>
							<Link key='1' href={link.link}>
								<a onClick={() => handlePageChange(link.page)}>
									<img src={(Number(link.page) === Number(page))?'../static/o-active.png':'../static/o.png'} witdh='15' height='30' />
								</a>
							</Link>
							<Link key='2' href={link.link}>
								<BottomLink onClick={() => handlePageChange(link.page)}>
									{link.page}
								</BottomLink>
							</Link>
						</Child>

					)}
				)}
				<Link key='last' href={generateLink(pages)}>
					<ImgLink src='../static/gle.png' witdh='25' height='30'/>
				</Link>

			</Container>}

		</div>
	)
}

export default Paginator;
