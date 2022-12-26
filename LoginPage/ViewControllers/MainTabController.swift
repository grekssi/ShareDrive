//
//  MainTabController.swift
//  LoginPage
//
//  Created by Bedros Garabedyan on 18.12.22.
//

import Foundation
import UIKit

class MainTabController : UITabBarController{
    
    var upperLineView: UIView!
       
       let spacing: CGFloat = 12

       override func viewDidLoad() {
           super.viewDidLoad()
           self.delegate = self
           DispatchQueue.main.asyncAfter(deadline: .now() + 0.2){
               self.addTabbarIndicatorView(index: 0, isFirstTime: true)
           }
           
           self.tabBar.items![0].image = UIImage(systemName: "info.square.fill")
           self.tabBar.items![0].title = ""
           self.tabBar.items![1].image = UIImage(systemName: "list.bullet.rectangle.fill")
           self.tabBar.items![1].title = ""
           self.tabBar.items![2].image = UIImage(systemName: "plus")
           self.tabBar.items![2].title = ""
           self.tabBar.items![3].image = UIImage(systemName: "tray.fill")
           self.tabBar.items![3].title = ""
           self.tabBar.items![4].image = UIImage(systemName: "person.fill")
           self.tabBar.items![4].title = ""
       }
       
       ///Add tabbar item indicator uper line
       func addTabbarIndicatorView(index: Int, isFirstTime: Bool = false){
           guard let tabView = tabBar.items?[index].value(forKey: "view") as? UIView else {
               return
           }
           if !isFirstTime{
               upperLineView.removeFromSuperview()
           }
           upperLineView = UIView(frame: CGRect(x: tabView.frame.minX + spacing, y: tabView.frame.minY + 0.1, width: tabView.frame.size.width - spacing * 2, height: 4))
           upperLineView.backgroundColor = UIColor.systemPurple
           tabBar.addSubview(upperLineView)
       }
}

extension MainTabController: UITabBarControllerDelegate {
    func tabBarController(_ tabBarController: UITabBarController, didSelect viewController: UIViewController) {
        addTabbarIndicatorView(index: self.selectedIndex)
    }
}
