import org.w3c.dom.*;
import javax.xml.parsers.*;
import java.io.*;
// import java.util.*;

public class XMLParser {
    public static void main(String[] args) {
        try {
            File xmlFile = new File("patient_data.xml");
            DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
            DocumentBuilder builder = factory.newDocumentBuilder();
            Document document = builder.parse(xmlFile);
            
            NodeList patientNodes = document.getElementsByTagName("patient");
            
            System.out.println("<html><body><table border='1'><tr><th>Name</th><th>Age</th><th>Gender</th></tr>");

            for (int i = 0; i < patientNodes.getLength(); i++) {
                Node patientNode = patientNodes.item(i);

                if (patientNode.getNodeType() == Node.ELEMENT_NODE) {
                    Element patientElement = (Element) patientNode;
                    String name = patientElement.getElementsByTagName("name").item(0).getTextContent();
                    String age = patientElement.getElementsByTagName("age").item(0).getTextContent();
                    String gender = patientElement.getElementsByTagName("gender").item(0).getTextContent();

                    System.out.println("<tr><td>" + name + "</td><td>" + age + "</td><td>" + gender + "</td></tr>");
                }
            }

            System.out.println("</table></body></html>");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
