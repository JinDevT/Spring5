package com.gms.web.generic;

import java.util.*;


/**
 Generic 타입을 생성하는데
 class Member{} -> static 상태로 Member 타입을 생성.
 List<Member>
 대응하는 개념<-> : Dynamic한 타입생성
 장점
 -타입의 안정ㅈ성 제공, 형변환 생략
 왜쓰냐?
 - 캐스팅을 안할려고...
 ->자바스크립트는 타입이 var..내부적으로만 존재..할당할 떄만 타입을 주기 떄문에 캐스팅을 안한다.
 * */
public class GenericIntro {
	@SuppressWarnings("static-access") //static에 접근한거다
	public static void main(String[] args) {
		System.out.println("=======[1]======");
		Item<String> itName = new Item<>(); 
		itName.setOne("갤노트");
		Item<Integer> itVers = new Item<>();
		itVers.setOne(9);
		System.out.println("삼성 신상폰 이름은:: \n"+
					itName.getOne()+itVers.getOne());
		System.out.println("=======[2]=====");
		Item<List<String>> it = new Item<>();
		it.setSome(
				Arrays.asList(
						new String[] {"Hello", "World", "Generic"})); // 배열을 리스트구조로 담음.
		System.out.println(it.getSome());
		System.out.println("=======[3]=====");
		FruitBox<Fruit> fbox = new FruitBox<>();
		FruitBox<Apple> abox = new FruitBox<>();
		fbox.add(new Apple());
		fbox.add(new Grape());
		abox.add(new Apple());
		abox.add(new Apple());
		
		System.out.println(new Mixer().makeJuice(fbox)); //wrong 뜨면 @있는거 클릭.
		System.out.println(new Mixer().makeJuice(abox));
		
	}
}
