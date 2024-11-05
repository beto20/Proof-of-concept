package com.example;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class Main {
    public static void main(String[] args) throws InvocationTargetException, IllegalAccessException {
        Cat cat = new Cat("pedro", 5);
        Dog dog = new Dog("carlos", 5);
        var x = cat.getClass().isAnnotationPresent(VeryImportant.class);
        var y = dog.getClass().isAnnotationPresent(VeryImportant.class);

        if (y) {
            System.out.println("The cat is very important");
        } else {
            System.out.println("The cat is not very important");
        }

        for (Method method: cat.getClass().getDeclaredMethods()) {
            if (method.isAnnotationPresent(RunImmediately.class)) {
                RunImmediately annotation = method.getAnnotation(RunImmediately.class);

                for (int i = 0; i < annotation.times(); i++) {
                    method.invoke(cat);
                }
            }
        }

        for (Method method: dog.getClass().getDeclaredMethods()) {
            if (method.isAnnotationPresent(RunImmediately.class)) {
                RunImmediately annotation = method.getAnnotation(RunImmediately.class);

                for (int i = 0; i < annotation.times(); i++) {
                    method.invoke(dog);
                }
            }
        }

        for (Field field: cat.getClass().getDeclaredFields()) {
            if (field.isAnnotationPresent(ImportantString.class)) {
                Object object = field.get(cat);

                if (object instanceof String) {
                    System.out.println("object: " + ((String) object).toUpperCase());
                }
            }
        }
    }


}
