import UIKit
import FirebaseAuth
import Firebase
import FirebaseFirestore


class SignUpViewController: UIViewController {
    
    @IBOutlet weak var passwordTextField: UITextField!
    @IBOutlet weak var emailTextField: UITextField!
    @IBOutlet weak var lastNameTextField: UITextField!
    @IBOutlet weak var firstNameTextField: UITextField!
    
    @IBOutlet weak var ProgressIndicator: UIActivityIndicatorView!
    @IBOutlet weak var signUpButton: UIButton!
    
    @IBOutlet weak var errorLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        setUpElements()
    }
    
    func setUpElements() {
        errorLabel.alpha = 0
        
        Utilities.styleTextField(firstNameTextField)
        Utilities.styleTextField(emailTextField)
        Utilities.styleTextField(lastNameTextField)
        Utilities.styleTextField(passwordTextField)
        Utilities.styleFilledButton(signUpButton)
    }
    
    func validateFields() -> String? {
        if let firstName = firstNameTextField.text, let lastName = lastNameTextField.text, let email = emailTextField.text, let password = passwordTextField.text {
            let trimmedFirstName = firstName.trimmingCharacters(in: .whitespacesAndNewlines)
            let trimmedLastName = lastName.trimmingCharacters(in: .whitespacesAndNewlines)
            let trimmedEmail = email.trimmingCharacters(in: .whitespacesAndNewlines)
            let trimmedPassword = password.trimmingCharacters(in: .whitespacesAndNewlines)
            
            if trimmedFirstName == "" || trimmedLastName == "" || trimmedEmail == "" || trimmedPassword == "" {
                return "Please fill in all fields"
            }
            
            if !Utilities.isPasswordValid(trimmedPassword) {
                return "Please make sure your password is at least 8 characters, contains a special character and a number."
            }
            
            return nil
        }
        
        return "Invalid input"
    }
    
    @IBAction func signUpTapped(_ sender: Any) {
        guard let error = validateFields() else {
            
            self.signUpButton.alpha = 0.2;
            self.ProgressIndicator.alpha = 1;
            self.ProgressIndicator.startAnimating();
            
            createUser()
            return
        }
        
        showError(error)
    }
    
    func createUser() {
        let firstName = firstNameTextField.text!.trimmingCharacters(in: .whitespacesAndNewlines)
        let lastName = lastNameTextField.text!.trimmingCharacters(in: .whitespacesAndNewlines)
        let email = emailTextField.text!.trimmingCharacters(in: .whitespacesAndNewlines)
        let password = passwordTextField.text!.trimmingCharacters(in: .whitespacesAndNewlines)
        
        Auth.auth().createUser(withEmail: email, password: password) { [weak self] result, error in
            guard let self = self else { return }
            
            if let error = error {
                self.showError("Error creating the user: \(error.localizedDescription)")
            } else {
                let db = Firestore.firestore()
                
                db.collection("users").addDocument(data: ["firstName" : firstName, "lastName" : lastName, "uid" : result!.user.uid]) { error in
                    if let error = error {
                        self.showError("Error adding user data: \(error.localizedDescription)")
                    } else {
                        self.transitionToHome()
                    }
                }
            }
        }
    }
    
    func transitionToHome() {
        let homeViewController = storyboard?.instantiateViewController(identifier: Constants.Storyboard.mainTabController) as? MainTabController
        view.window?.rootViewController = homeViewController
        view.window?.makeKeyAndVisible()
    }
    
    func showError(_ message: String) {
        errorLabel.text = message
        errorLabel.alpha = 1
    }
}
