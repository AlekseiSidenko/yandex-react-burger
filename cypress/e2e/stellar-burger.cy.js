describe('app works correctly with routes', function () {
  const interceptConfig = 'https://norma.nomoreparties.space/api'
  beforeEach(function () {
    cy.visit('http://localhost:3000/yandex-react-burger#/');
    cy.viewport(1280, 1024)
  });

  it('should check modal ingredient details', function() {
    cy.intercept(`${interceptConfig}/ingredients`).as('getIngredients')
    cy.wait('@getIngredients')
    cy.get('a').contains('Флюоресцентная булка').click()
    cy.contains('Детали ингридиента').should('be.visible');
    cy.get('[class^=modal_close]').click()
    cy.contains('Детали ингридиента').should('not.exist');
  });

  it('should check tab switch', function() {
    cy.intercept(`${interceptConfig}/ingredients`).as('getIngredients')
    cy.wait('@getIngredients')
    cy.get('span').contains('Соусы').click()
    cy.contains('Соус Spicy-X').should('be.visible')
    cy.contains('Краторная булка N-200i').should('be.not.visible')
    cy.get('span').contains('Начинки').click()
    cy.contains('Соус Spicy-X').should('be.not.visible')
    cy.contains('Краторная булка N-200i').should('be.not.visible')
    cy.contains('Мясо бессмертных моллюсков Protostomia').should('be.visible')
    cy.get('span').contains('Булки').click()
    cy.contains('Краторная булка N-200i').should('be.visible')
  })

  it('should drag ingredients, login, make order again, check preloader and popup with order ', function() {
    cy.intercept(`${interceptConfig}/ingredients`).as('getIngredients')
    cy.wait('@getIngredients')
    const dataTransfer = new DataTransfer();
    cy.get('a').contains('Флюоресцентная булка').trigger('dragstart', { dataTransfer });
    cy.get('[class^=burger-constructor_order]').trigger('drop', { dataTransfer });
    cy.get('a').contains('Соус с шипами Антарианского плоскоходца').trigger('dragstart', { dataTransfer });
    cy.get('[class^=burger-constructor_order]').trigger('drop', { dataTransfer });
    cy.get('a').contains('Мясо бессмертных моллюсков Protostomia').trigger('dragstart', { dataTransfer });
    cy.get('[class^=burger-constructor_order]').trigger('drop', { dataTransfer });
    cy.get('a').contains('Кристаллы марсианских альфа-сахаридов').trigger('dragstart', { dataTransfer });
    cy.get('[class^=burger-constructor_order]').trigger('drop', { dataTransfer });
    cy.get('button').contains('Оформить заказ').click();
    cy.get('[type=email]').type('Cypress@ya.ru');
    cy.get('[type=password]').type('Cypresstest');
    cy.get('button').contains('Войти').click();
    cy.get('button').contains('Оформить заказ').click();
    cy.contains('Отправляю заказ...').should('be.visible');
    cy.intercept(`${interceptConfig}/orders`).as('getOrder');
    cy.wait('@getOrder');
    cy.contains('идентификатор заказа').should('be.visible');
    cy.get('[class^=modal_close]').click()
    cy.contains('идентификатор заказа').should('not.exist');
  })

}); 