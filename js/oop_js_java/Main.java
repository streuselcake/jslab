
// The Cookie object in Java has a reference to it's class, the Cookie object in js to it's prototype.

class Cookie {
    public void bake(){ System.out.println("baking cookie...");  }
}

public class Main {
    public static void main(String[] args) {
        Cookie c = new Cookie();
        //c.getClass();
        c.bake();

    }
}
