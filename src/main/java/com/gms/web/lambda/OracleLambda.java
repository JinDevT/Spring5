package com.gms.web.lambda;

import java.util.function.Predicate;

/**
Consumer<T>     void accept(T t) -> C,U,D 게터
Function<T,R>	R apply(T t)     -> R 세터
Predicate<T>    boolean test(T t) -> login
Supplier<T>     T get() -> count
---------------------------------
UnaryOperator<T> static <T> UnaryOperator<T> identity()
위에 것들은 이미 만들어져있다.
 * */
public class OracleLambda {
	public static void main(String[] args) {
		Predicate<String> p = s-> s.length() == 0;
		String x = "";
		String y = "hello";
		String r = (p.test(y)) ?"NULL":"Not NULL";
		System.out.println(r);
	
	}

}
