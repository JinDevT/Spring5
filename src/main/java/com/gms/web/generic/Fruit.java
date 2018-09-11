package com.gms.web.generic;

public class Fruit {public String toString() {return "Fruit";}} //public 은 단 하나 자바파일 이름이랑 똑같아야한다.
class Apple extends Fruit{public String toString() {return "Apple";}}
class Grape extends Fruit{public String toString() {return "Grape";}}
class Juice{
	String name;
	Juice(String name){this.name = name + "Juice";}
	public String toString() {return name;}
}
class Mixer{
	static Juice makeJuice(FruitBox<? extends Fruit> box) { // ? 에는 과일에 자식들만 들어오는 오브젝트
		String t = "";
		for(Fruit f : box.getList())
			t += f + " ";
		return new Juice(t);
	}
}
class FruitBox<T extends Fruit> extends Box<T>{}
