//
//  LoginViewController.swift
//  MyHotel
//
//  Created by Bedros Garabedyan on 18.10.22.
//

import UIKit
import Firebase
import FirebaseAuth

class LoginViewController: UIViewController {

    @IBOutlet weak var PasswordTextField: UITextField!
    @IBOutlet weak var ErrorLabel: UILabel!
    @IBOutlet weak var LoginButton: UIButton!
    @IBOutlet weak var EmailTextField: UITextField!
    override func viewDidLoad() {
        super.viewDidLoad()
        
        setUpElements();
        // Do any additional setup after loading the view.
    }
    
    func setUpElements(){
        ErrorLabel.alpha = 0;
        
        Utilities.styleTextField(PasswordTextField);
        Utilities.styleTextField(EmailTextField);
        Utilities.styleFilledButton(LoginButton);
        
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

    @IBAction func LoginTapped(_ sender: Any) {
        let email = EmailTextField.text!.trimmingCharacters(in: .whitespacesAndNewlines);
        let password = PasswordTextField.text!.trimmingCharacters(in: .whitespacesAndNewlines)
        
        Auth.auth().signIn(withEmail: email, password: password) { (result, error) in
            if error != nil{
                self.ErrorLabel.text = error!.localizedDescription
                self.ErrorLabel.alpha = 1
            }
            else {
                let homeViewController = self.storyboard?.instantiateViewController(identifier: Constants.Storyboard.homeViewController) as? HomeViewController;
                
                self.view.window?.rootViewController = homeViewController;
                self.view.window?.makeKeyAndVisible();
            }
        }
    }
}
