//
//  ViewController.swift
//  MyHotel
//
//  Created by Bedros Garabedyan on 18.10.22.
//

import UIKit
import FBSDKCoreKit
import FBSDKLoginKit
import FirebaseAuth

class ViewController: UIViewController {
    
    private let logoTopConstraintInitialValue = 50;
    private let animationDuration = 1.0
    private let animationDelay = 0.0
    private let buttonsBackgroundViewAlpha = 0.55
    private let buttonsStackViewAlpha = 1.0

    @IBOutlet weak var ButtonsBackgroundView: UIView!
    @IBOutlet weak var LogoTopConstraint: NSLayoutConstraint!
    @IBOutlet weak var SignUpButton: UIButton!
    @IBOutlet weak var ButtonsStackView: UIStackView!
    @IBOutlet weak var BackgroundButton: UIButton!
    @IBOutlet weak var Logo: UIImageView!
    @IBOutlet weak var LoginButton: UIButton!

    override func viewDidLoad() {
        super.viewDidLoad()

        animateLogo()
        setUpElements()
    }

    private func animateLogo() {
        UIView.animate(withDuration: animationDuration, delay: animationDelay) {
            self.Logo.alpha = 1;
        } completion: {(finished:Bool) in
            self.LogoTopConstraint.constant = CGFloat(self.logoTopConstraintInitialValue)
            UIView.animate(withDuration: 0.3, delay: 0) {
                self.view.layoutIfNeeded()
            }
            UIView.animate(withDuration: 0.3, delay: 0) {
                self.ButtonsBackgroundView.alpha = self.buttonsBackgroundViewAlpha
                self.ButtonsStackView.alpha = self.buttonsStackViewAlpha
            }
        }
    }

    private func setUpElements() {
        styleSignUpButton()
        styleLoginButton()
        createBackgroundButtonPath()
        styleButtonsBackgroundView()
    }

    private func styleSignUpButton() {
        Utilities.styleFilledButton(SignUpButton)
    }

    private func styleLoginButton() {
        Utilities.styleHollowButton(LoginButton)
    }

    private func createBackgroundButtonPath() {
        let path = UIBezierPath(roundedRect:BackgroundButton.bounds,
                                byRoundingCorners:[.topRight, .bottomLeft],
                                cornerRadii: CGSize(width: 200, height:  200))

        let maskLayer = CAShapeLayer()

        maskLayer.path = path.cgPath
        BackgroundButton.layer.mask = maskLayer
    }

    private func styleButtonsBackgroundView() {
        ButtonsBackgroundView.layer.cornerRadius = 50
    }
    
    @IBAction func facebookLoginButtonPressed(_ sender: Any) {
        let loginManager = LoginManager()
        loginManager.logIn(permissions: ["email"], from: self) { (result, error) in
          if let error = error {
            // Handle errors
            print("Failed to login: \(error.localizedDescription)")
            return
          }
          
          guard let accessToken = AccessToken.current else {
            print("Failed to get access token")
            return
          }

          let credential = FacebookAuthProvider.credential(withAccessToken: accessToken.tokenString)

          // Perform login with Firebase
          Auth.auth().signIn(with: credential) { (authResult, error) in
            if let error = error {
              // Handle errors
              print("Failed to login to Firebase with Facebook: \(error.localizedDescription)")
              return
            }
            
              self.transitionToHome();
          }
        }
      }
    
    func transitionToHome() {
        let homeViewController = storyboard?.instantiateViewController(identifier: Constants.Storyboard.homeViewController) as? HomeViewController
        view.window?.rootViewController = homeViewController
        view.window?.makeKeyAndVisible()
    }
    
    let loginButton = FBLoginButton();
    
    func loginButton(_ loginButton: FBLoginButton!, didCompleteWith result: LoginManagerLoginResult!, error: Error!) {
      if let error = error {
        print(error.localizedDescription)
        return
      }
      // ...
    }
}
