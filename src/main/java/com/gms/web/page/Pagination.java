package com.gms.web.page;

import java.util.Map;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data @Lazy
public class Pagination implements Proxy {
	int pageSize,
	 blockSize,
	 beginPage,
	 endPage,
	 pageCount,
	 rowCount,
	 blockCount,
	 beginRow,
	 endRow,
	 pageNumber,
	 prevBlock,
	 nextBlock;
	boolean existPrev,existNext;

	@Override
	public void carryOut(Map<?,?> param) {
		this.pageNumber =  (int) param.get("pageNumber");
		this.pageSize = 5;
		this.blockSize = 5;
		System.out.println("Pagination carryOut 진입");
		this.rowCount =(int) param.get("rowCount");
		this.pageCount = (rowCount%pageSize==0)?
				rowCount/pageSize : rowCount/pageSize+1;
		this.blockCount = (pageCount%blockSize==0)?
				pageCount/blockSize : pageCount/blockSize+1;
		this.beginRow = pageNumber*pageSize - (pageSize-1);
		this.endRow = pageNumber*pageSize;
		this.beginPage = pageNumber -((pageNumber-1)%blockSize);
		this.endPage = ((beginPage + pageSize -1)<pageCount)?
				beginPage+blockSize-1:pageCount;
		this.prevBlock = beginPage - blockSize;
		this.nextBlock = beginPage + blockSize;
		this.existPrev = (prevBlock >= 0);
		this.existNext =(nextBlock <= pageCount);
		//rowCount,existPrev,prevBlock,beginPage,endPage,existNext,nextBlock
		
		
	}
	
}
